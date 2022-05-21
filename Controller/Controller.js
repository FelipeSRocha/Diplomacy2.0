let zoom = 1
let DB = new DataBase()
let MEC = new Game()
let VIEW = new View() 
const Inhtml = new InHTML()

function newGame(){
  VIEW.RenderTitle()
  VIEW.RenderPlayers()
  VIEW.RenderMap()
  VIEW.RenderFooter()

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




