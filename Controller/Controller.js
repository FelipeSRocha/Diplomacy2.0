let Diplomacy
let Render
let zoom = 1

function Controller(){
  DataFounder = new DataBase()
  Diplomacy = new Game()

  Render = new View()
  Render.RenderStartScreen()
}
function Reset(){
  DataFounder = new DataBase()
  Diplomacy = new Game()

  Render = new View()
  Render.ReloadTable()
  Render.RenderFooter()
  Render.RenderPlayers()
  DataFounder.UpdateDataInfluency()
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




