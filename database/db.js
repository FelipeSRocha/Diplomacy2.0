const Brain = require('../database/brain')
const envConfig = require("dotenv").config();
const Ably = require("ably");
const ABLY_API_KEY = process.env.ABLY_API_KEY
const realtime = new Ably.Realtime(ABLY_API_KEY);

class serverList{
  constructor(){
    this.liveServers = {}
    this.MaxPlayers = 4
  }
  joinServer(isHost, nickname, roomCode, clientId){
    let resp = {init: false, brain: false}

    if(isHost){
      //config brain, truth channel, player enter/leave (doorchannel) and each of the players channel
      this.liveServers[roomCode] = {
        brain: new Brain(nickname, clientId),
        truthChannel: realtime.channels.get(roomCode),
        doorChannel: this.initDoorChannel(),
        playerChannel: []
        }
      //config the player channel
      this.initPlayerChannel(clientId, roomCode)

      //send resp to initiate the game
      resp = {type: "init", clientId: clientId, roomCode: roomCode, brain: this.liveServers[roomCode].brain}
      this.liveServers[roomCode].truthChannel.publish('init', resp)
    }else{
      //if not host
      const testroom = roomCode in this.liveServers
      if(testroom){
        //if find roomcode
        const maxPlayers = Object.keys(this.liveServers[roomCode].brain.players).length
        if (maxPlayers < this.MaxPlayers){
          //if room is not full
          this.liveServers[roomCode].brain.createPlayer(nickname, clientId)
          this.initPlayerChannel(clientId, roomCode)

          //send resp to render the new player
          resp = {type: "init", clientId: clientId, roomCode: roomCode, brain: this.liveServers[roomCode].brain}
          this.liveServers[roomCode].truthChannel.publish('init', resp)
        }
      }
    }
  }
  initDoorChannel(){
    const newPlayers = realtime.channels.get(this.roomCode+"-activePlayers")
    newPlayers.presence.subscribe("enter", (enterplayer) =>{
      // player entering the server
      // brain.addPlayertoServer(enterplayer)
    })
    newPlayers.presence.subscribe("leave", (enterplayer) =>{
      // player leaving the server
      // brain.addPlayertoServer(enterplayer)
    })
    return newPlayers

  }
  initPlayerChannel(clientId, roomCode){
    const playerChannelName = roomCode+"-"+ clientId+"Truth"

    const playerChannel = realtime.channels.get(playerChannelName)
    playerChannel.subscribe(function(msg){
      //mensagem de ação vem como {action:, params:, roomCode:, clientId:}
      const resp = listServer.brainlogic(msg)      
      listServer.liveServers[roomCode].truthChannel.publish('init', resp)
    })
    this.liveServers[roomCode].playerChannel.push(playerChannel)
  }
  addPlayertoServer(enterplayer){
    const isHost = enterplayer.data.isHost
    const nickname = enterplayer.data.nickname
    const clientId = enterplayer.clientId
    const roomCode = enterplayer.data.roomCode

  }
  brainlogic(msg){
    const roomCode = msg.data.roomCode
    const clientId = msg.data.clientId
    const action = msg.data.action
    const params = msg.data.params
    let other

    switch(action){
      
      case "ModifyValue": 
        console.log("Action ModifyValue")
        this.liveServers[roomCode].brain.ModifyValue(params)
        break
      
      case "UpdateInfluency":
  
        this.liveServers[roomCode].brain.UpdateInfluency(params)
        other = params[0]
        break
      
      case "NextRound":
        this.liveServers[roomCode].brain.NextRound()
  
        break
    }
    const resp = {type: "action", resp:action, brain: this.liveServers[roomCode].brain, other: other}
    return resp
  }
}

const listServer = new serverList()

realtime.connection.once("connected", () => {
  globalChannel = realtime.channels.get("global_Channel");

  // subscribe to new players creating new the games
  globalChannel.presence.subscribe("enter", (player) => {
      //Create new server in database
      
      listServer.joinServer(player.data.isHost,
        player.data.nickname,
        player.data.roomCode,
        player.clientId)
  });
});


module.exports = realtime