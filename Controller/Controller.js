let Diplomacy
let Render
let zoom = 1

function Controller(){
  Diplomacy = new Game()
  Render = new View()
  Render.RenderStartScreen()
}
function Reset(){
  Diplomacy = new Game()
  Render = new View()
  Render.RenderPlayers()
  Render.RenderFooter()
}
function Zoom(){
  const zoomElement = document.querySelector(".ClassImgTable");
  let ZOOM_SPEED = 0.1;
  document.addEventListener("wheel", function(e){
    if (e.deltaY > 0) {
      if(zoom>0.7){
        zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`; 
      }
      
    } else {
      if(zoom<3){
        zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
      }
    }
  });
}
function MoveMap(){
  const wrapper = document.querySelector("#IDTable")
  map = wrapper.querySelector("#IDImgTable")
  let Speed = 50
  document.addEventListener("keydown", function(e){
    let getstyle = window.getComputedStyle(wrapper)
    let left = parseInt(getstyle.left)
    let top = parseInt(getstyle.top)

    switch(e.key.toString()){

      case "a":
      case "A":
      case "ArrowLeft":
        if(left<200*zoom*zoom){
          wrapper.style.left=`${left + Speed}px`
        }
      break

      case "w":
      case "W":
      case "ArrowUp":
        if(top<200*zoom*zoom){
          wrapper.style.top=`${top + Speed}px`
        }
      break

      case "s":
      case "S":
      case "ArrowDown":
        if(top>-150*zoom*zoom){
          wrapper.style.top=`${top - Speed}px`
        }
      break

      case "d":
      case "D":
      case "ArrowRight":
        if(left>-200*zoom*zoom){
          wrapper.style.left=`${left - Speed}px`
        }
      break
    }
  })
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




