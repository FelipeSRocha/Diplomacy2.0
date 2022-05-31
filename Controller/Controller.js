let zoom = 1
// let DB = new DataBase()
// let MEC = new Game()
let VIEW = new View() 
const Inhtml = new InHTML()


function newGame(game, realtime){
  stream(game, realtime)
  
  VIEW.RenderTitle()
  // VIEW.RenderPlayers()
  // VIEW.RenderMap()
  // VIEW.RenderFooter()
  console.log("NewGame finalizado")
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

function OverContry(){
  let country = document.getElementsByClassName("ClassCountry");
  for (var i = 0; i < country.length; i++) {
    country.item(i).addEventListener("mouseover",(e)=>{
      let name = document.getElementById(e.path[0].id)
      let color = "#ca0b0b"
      name.style.fill = color
    })
    country.item(i).addEventListener("mouseout",(e)=>{
      let name = document.getElementById(e.path[0].id)
      let color = "#C4C4C4"
      name.style.fill = color
    })
  }
}

function stream(game, realtime){
  console.log("Achando canal")
  const pubChannel = realtime.channels.get(`${game.room}-Player`);
  const subChannel = realtime.channels.get(`${game.room}-Server`);
  pubChannel.publish('init',{init:1})
  subChannel.subscribe(function(msg) {
    console.log(msg.data)
    alert(`Se for 2 deu bom: ${msg.data.resp}`)
  });
  console.log("Canal estabelecido")
}



