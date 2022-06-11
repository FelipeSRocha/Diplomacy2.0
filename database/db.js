const Brain = require('../database/brain')
const envConfig = require("dotenv").config();
const Ably = require("ably");
const { param } = require('../routes/gamebase');
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
          resp = {type: "newPlayer", clientId: clientId, roomCode: roomCode, brain: this.liveServers[roomCode].brain, newLog: `${nickname} entrou.`}
          this.liveServers[roomCode].truthChannel.publish('init', resp)
        }
      }
    }
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
    let newLog
    const name = this.liveServers[roomCode].brain.players[clientId].stats.name
    switch(action){
      
      case "ModifyValue": 
        //params = [id,"bank",key,-1]
        this.liveServers[roomCode].brain.ModifyValue(params)

        const player = this.liveServers[roomCode].brain.players[params[0]].stats.name
        if (params[3]>0){
          newLog = `${name} adicionou ${params[3]} de ${params[2]} no banco de ${player}`
        }
        if (params[3]<0){
          newLog = `${name} removeu ${params[3]} de ${params[2]} no banco de ${player}`
        }
        break
      
      case "UpdateInfluency":
  
        this.liveServers[roomCode].brain.UpdateInfluency(params)
        other = params[0]

        let loop =[]
        Object.keys(this.liveServers[roomCode].brain.players).forEach(id=>{
          const position = this.liveServers[roomCode].brain.players[id].stats.position
          if(params[1][position]){
            loop.push(this.liveServers[roomCode].brain.players[id].stats.name)
          }
        })
        let text = loop.join(", ")
        const country = this.liveServers[roomCode].brain.countries[params[0]].Nome
        if (loop.length<1){
          newLog = `${name} confirmou que ${country} está sob influência de ninguém.`
        } else{
          newLog = `${name} confirmou que ${country} está sob influência de ${text}.`
        }
        
        break
      
      case "NextRound":
        this.liveServers[roomCode].brain.NextRound()
        newLog = `${name} passou o round.`
        break

      case "rollDice":
        other = this.rollDice()
        newLog = `${name} rolou ${other}`
        break
    }
    const resp = {type: "action", resp:action, brain: this.liveServers[roomCode].brain, other: other, newLog: newLog}
    return resp
  }
  rollDice(){
    const dice = ["Comida", "Comida", "Energia", "Energia", "Tecnologia", "Exercito"]
    const random = Math.floor(Math.random() * dice.length)
    const value = dice[random]
    return value
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