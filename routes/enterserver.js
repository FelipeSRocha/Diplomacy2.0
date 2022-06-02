const express = require('express')
const routes = express.Router()
const database = require('../database/brain')
const envConfig = require("dotenv").config();
const Ably = require("ably");
const ABLY_API_KEY = process.env.ABLY_API_KEY
const realtime = new Ably.Realtime(ABLY_API_KEY);
const db = require('../database/db')

let initChannel;
let globalChannel;
let activeGameRooms = {};

const GAME_ROOM_CAPACITY = 4;

const uniqueId = function () {
    return "id-" + Math.random().toString(36).substr(2, 16);
  };
  
function configServerStream(room){
    const gameInit = realtime.channels.get(`${room}-Master`);
    const subChannel = realtime.channels.get(`${room}-Player`);
    const pubChannel = realtime.channels.get(`${room}-Server`);
    subChannel.subscribe(function(msg) {
        if (msg.data.init){
            gameInit.publish('init',{init: true, brain:db.liveServers[room].brain})
        }
      });
    
    console.log(`Stream com a sala "${room}" criado`)
}
routes.use(express.static("js"));

routes.get("/auth", (request, response) => {
    const tokenParams = { clientId: uniqueId() };
    realtime.auth.createTokenRequest(tokenParams, function (err, tokenRequest) {
        if (err) {
        response
            .status(500)
            .send("Error requesting token: " + JSON.stringify(err));
        } else {
        response.setHeader("Content-Type", "application/json");
        response.send(JSON.stringify(tokenRequest));
        }
    });
});

realtime.connection.once("connected", () => {
    globalChannel = realtime.channels.get("global_Channel");

    // subscribe to new players creating new the games
    globalChannel.presence.subscribe("enter", (player) => {
        //Create new server in database
        const resp = db.joinServer(
            player.data.isHost,
            player.data.nickname,
            player.data.roomCode,
            player.clientId
        );
        //publish data to initiate new game for host
        initChannel = realtime.channels.get(player.data.roomCode)
        initChannel.publish('init',resp)
        
        //create enter/leave channel
        let newPlayers = realtime.channels.get(player.data.roomCode+"_activePlayers")
        newPlayers.presence.subscribe("enter", (enterplayer) =>{
          db.addPlayertoServer(enterplayer)
        })
        newPlayers.presence.subscribe("leave", (leaveplayer) =>{
          db.removePlayerfromServer(leaveplayer)
        })
        //create gametruth channel
        let truthChannel = realtime.channels.get(player.data.roomCode+"gameTruth")
        truthChannel.subscribe(function(msg){
          brainlogic(msg)
        })

    });
});

function brainlogic(msg){
  const room = msg.room
  const player = msg.player
  const action = msg.action
}
module.exports = routes