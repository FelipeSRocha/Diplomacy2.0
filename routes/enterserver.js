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


routes.get("/gameplay", (request, response) => {
    let requestedRoom = request.query.roomCode;
    let isReqHost = request.query.isHost == "true";
    if (!isReqHost && activeGameRooms[requestedRoom]) {
      if (
        activeGameRooms[requestedRoom].totalPlayers + 1 <= GAME_ROOM_CAPACITY
      ) {
        response.sendFile(__dirname + "/views/index.html");
      } else {
        console.log("here");
        response.sendFile(__dirname + "/views/gameRoomFull.html");
      }
    } else if (isReqHost) {
      response.sendFile(__dirname + "/views/index.html");
    } else {
      response.sendFile(__dirname + "/views/gameRoomFull.html");
    }
    console.log(JSON.stringify(activeGameRooms));
});

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

    // subscribe to new players entering the game
    globalChannel.presence.subscribe("enter", (player) => {
        const resp = db.joinServer(
            player.data.isHost,
            player.data.nickname,
            player.data.roomCode,
            player.clientId
        );
        initChannel = realtime.channels.get(player.data.roomCode)
        initChannel.publish('init',{init: resp.init, brain: resp.brain})
    });
});

module.exports = routes