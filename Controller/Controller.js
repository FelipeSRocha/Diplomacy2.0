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
  const playerChannelName = newGame.roomCode+"-"+newGame.clientId+"Truth"

  playerChannel = realtime.channels.get(playerChannelName)
}
function updateTruth(respData){
  DB = respData.brain
  switch (respData.resp){
    case "ModifyValue":
      VIEW.changeValueofPlayer(DB)
      break
    case "UpdateInfluency":
      //other chega como [NameofCountry]

      VIEW.changeValueofPlayer(DB)
      Object.keys(DB.players).forEach(id=>{
        const pN = DB.players[id].stats.position

        const influenciedcountry = DB.players[id].territories.includes(respData.other)
        console.log(respData.other, DB.players[id].territories)
        VIEW.ColorPlayerCircle(respData.other, pN, id, influenciedcountry)
      })
      break
  }

}
function sendAction(action, params){
  //action é composto por ("ação",lista de parametros)
  console.log("enviando action", params)
  playerChannel.publish("action",{action:action, params:params, roomCode:localStorage.getItem("roomCode"), clientId:localStorage.getItem("clientId")})
}



