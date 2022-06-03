let zoom = 1
let gameInit 
let playerChannel
let connect
let DB
let VIEW = new View() 
const Inhtml = new InHTML()

function newGame(newGame){
  establishConnections(newGame)
  deleteForm()
  DB = newGame.brain
  VIEW.RenderTitle()
  VIEW.RenderPlayers(DB)
  VIEW.RenderMap()
  VIEW.RenderFooter(DB)
  console.log(truthChannel)
}
function resetGame(){
  Inhtml.DeleteIfExist('#masterID')
  Inhtml.AddElement('div','body','masterID','masterclass')
  DB = new DataBase()
  MEC = new Game()
  VIEW = new View()

  VIEW.RenderTitle()
  VIEW.RenderPlayers()
  VIEW.RenderMap()
  VIEW.RenderFooter()
}
function deleteForm(){
  const inhtml = new InHTML()
  inhtml.DeleteIfExist("#form")
}
function establishConnections(newGame){
  const truthChannelName = newGame.roomCode
  const playerChannelName = newGame.roomCode+"-playerTruth"
  console.log(truthChannelName, playerChannelName)

  playerChannel = realtime.channels.get(playerChannelName)
}
function updateTruth(respData){
  DB = respData.brain
  switch (respData.resp){
    case "ModifyValue":
      VIEW.changeValueofPlayer(DB)
      break
  }

}
function sendAction(action, params){
  //action é composto por ("ação",lista de parametros)
  console.log("enviando action")
  playerChannel.publish("action",{action:action, params:params, roomCode:localStorage.getItem("roomCode"), clientId:localStorage.getItem("clientId")})
}



