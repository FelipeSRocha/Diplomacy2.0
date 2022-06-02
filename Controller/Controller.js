let zoom = 1
let gameInit 
let pubChannel
let subChannel
let connect
let DB
let VIEW = new View() 
const Inhtml = new InHTML()

function newGame(database){
  establishConnections()
  deleteForm()
  DB = database
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

function enterGame(game, realtime){
  console.log("Achando canal")
  connect = realtime
  gameInit = connect.channels.get(`${game.room}-Master`);
  pubChannel = connect.channels.get(`${game.room}-Player`);
  subChannel = connect.channels.get(`${game.room}-Server`);
  pubChannel.publish('init',{init:true})

  gameInit.subscribe(function(msg) {
    if (msg.data.init){
      newGame(msg.data.brain)
    }
  });
  console.log("Canal estabelecido")
}
function deleteForm(){
  const inhtml = new InHTML()
  inhtml.DeleteIfExist("#form")
}
function establishConnections(){

}


