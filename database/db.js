const DataBase = require('../database/brain')

class serverList{
  constructor(){
    this.liveServers = {}
    this.MaxPlayers = 4
  }
  joinServer(isHost, nickname, roomCode, clientId){
    let resp = {init: false, brain: false}
    if(isHost){
      console.log("nova sala")
      this.liveServers[roomCode] = {
        brain: new DataBase(nickname, clientId)
        }
        resp = {type: "init", roomCode: roomCode, brain: this.liveServers[roomCode].brain}
    }else{
      const testroom = roomCode in this.liveServers
      if(testroom){
        const maxPlayers = Object.keys(this.liveServers[roomCode].brain.players).length
        if (maxPlayers < this.MaxPlayers){
          console.log("Entrando na sala")
          this.liveServers[roomCode].brain.createPlayer(nickname, clientId)
          resp = {type: "init", roomCode: roomCode, brain: this.liveServers[roomCode].brain}
        }
      }
    }
    return resp
  }
  addPlayertoServer(enterplayer){
    const isHost = enterplayer.data.isHost
    const nickname = enterplayer.data.nickname
    const clientId = enterplayer.clientId
    const roomCode = enterplayer.data.roomCode
    this.liveServers[roomCode].brain
  }
}
const listServer = new serverList()
module.exports = listServer