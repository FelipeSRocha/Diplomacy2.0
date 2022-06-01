const DataBase = require('../database/brain')

class serverList{
  constructor(){
    this.liveServers = {}
    
  }
  joinServer(isHost, nickname, roomCode, clientId){
    let resp = {init: false, brain: false}
    if(isHost){
      const testroom = roomCode in this.liveServers
      if(!testroom){
        console.log("nova sala")
        this.liveServers[roomCode] = {
          player: [nickname],
          playerID:[clientId],
          brain: new DataBase()
          }
          resp = {init: true, brain: this.liveServers[roomCode].brain}
        } 
      }else{
        const testroom = roomCode in this.liveServers
        if(testroom){
          console.log("Entrando na sala")
          this.liveServers[roomCode].player.push([nickname])
          this.liveServers[roomCode].playerID.push([clientId])
          resp = {init: true, brain: this.liveServers[roomCode].brain}
        }
      }
    return resp
  }
}
const listServer = new serverList()
module.exports = listServer