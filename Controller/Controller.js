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
  VIEW.RenderMap(DB)
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
        VIEW.ColorPlayerCircle(respData.other, pN, id, influenciedcountry)
      })
      break

    case "NextRound":

      VIEW.changeValueofPlayer(DB)

      let Quarter = (DB.Round%4)+1
      let year = parseInt(DB.Round/4)
      let fase = {"Round": DB.Round+1, "Quarter":Quarter,"Year":year}

      VIEW.UpdateFooter(fase)

      if(Quarter==1 && DB.Round > 1|| Quarter == 3 && DB.Round == 2){
        const numberEvent = DB.Events.activeEvents[0][0]
        VIEW.DisplayEvent(DB.Events[numberEvent].nome, DB.Events[numberEvent].efeito)

      }else if(Quarter==3){
        const numberEvent = DB.Events.activeEvents[1][0]
        VIEW.DisplaySecondEvent(DB.Events[numberEvent].nome, DB.Events[numberEvent].efeito)
      }
      break
    case "rollDice":
      const resource = respData.other
      const img = document.getElementById("diceFigure")
      img.src= `Img/${resource}.png`
      break
  }
  updateLog(respData.newLog)
}
function updateLog(newLog){
  const log1 = document.getElementById("log1")
  const log2 = document.getElementById("log2")
  const log3 = document.getElementById("log3")
  log3.innerHTML = log2.innerHTML
  log2.innerHTML = log1.innerHTML
  log1.innerHTML = newLog
  
}
function sendAction(action, params=[]){
  //action é composto por ("ação",lista de parametros)

  playerChannel.publish("action",{action:action, params:params, roomCode:roomCode, clientId:myClientId})
}



