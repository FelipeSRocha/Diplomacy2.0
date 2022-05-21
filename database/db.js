class serverList{
  constructor(){
    this.liveServers = {"test":{
      password: "123" ,
      player: ["nick"]
      }
    }
  }
  addServer(server){
    const testroom = server.room in this.liveServers
    let result = true
    
    if(!testroom){
      this.liveServers[server.room] = {
        password: server.password,
        player: [server.player]
        }

    }else{
      result = false

    }
    return result
  }
  enterServer(server){
    let result = "1"
    const testroom = server.room in this.liveServers

    if(testroom){
      result = "2"
      if(server.password == this.liveServers[server.room].password){

        if(this.liveServers[server.room].player.length <4){
          this.liveServers[server.room].player.push(server.player)
          result = "3"
          
        }else{
          result = "4"
        }
      }
    }
    return result
  }
}
const listServer = new serverList()
module.exports = listServer