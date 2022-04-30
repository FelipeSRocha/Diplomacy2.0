let Diplomacy
let Render

function Controller(){
    Diplomacy = new Game()
    Render = new View()
    Render.RenderStartScreen()
}

function Zoom(){
    const zoomElement = document.querySelector(".ClassImgTable");
    let zoom = 1;
    const ZOOM_SPEED = 0.1;
    document.addEventListener("wheel", function (e) {
      console.log(zoom)
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
    document.addEventListener("keydown", e=>{
      let getstyle = window.getComputedStyle(wrapper)
      let left = parseInt(getstyle.left)
      let top = parseInt(getstyle.top)
      console.log(left, top)
      switch(e.key.toString()){

        case "a":
        case "ArrowLeft":
          if(left<200){
            wrapper.style.left=`${left + Speed}px`
          }
        break

        case "w":
        case "ArrowUp":
          if(top<200){
            wrapper.style.top=`${top + Speed}px`
          }
        break

        case "s":
        case "ArrowDown":
          if(top>-150){
            wrapper.style.top=`${top - Speed}px`
          }
        break

        case "d":
        case "ArrowRight":
          if(left>-200){
            wrapper.style.left=`${left - Speed}px`
          }
        break
      }
    })
}





