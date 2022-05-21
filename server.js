const express = require("express");
const server = express();

const port = 3000;

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
const ServerList = new serverList

// Static Files
server.use(express.static("public"));
server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.post("/addServer", (req, res) => {
  const server = req.body
  const resp = ServerList.addServer(server)
  res.redirect(`/game/${server.room}-${server.password}`)
  // res.send(resp)
});
server.post("/enterServer", (req, res) => {
  const server = req.body
  const resp = ServerList.enterServer(server)
  res.send({resp: resp})
});
server.get("/game/:room", function(req, res){
  console.log(req.params.room)
  res.send(true)
});
 
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});
server.get("/main.css", (req, res) => {
  res.sendFile(__dirname + "/css/main.css");
});
server.get("/controller/formActions.js", (req, res) => {
  res.sendFile(__dirname + "/controller/formActions.js");
});


server.listen(port, () => console.log(`Server rodando na porta: ${port}`));