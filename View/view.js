class View{
  constructor(){
      this.Title = document.getElementById("HeaderID")
      this.Table = document.getElementById("ContainerID")
      this.Inhtml = new InHTML()
  }

  RenderTitle(){
    // Verifica se existe algo no titulo e exclui 
    this.Inhtml.DeleteIfExist("#HeaderID")

    //Adiciona Titulo
    this.Inhtml.AddElement("div","masterID","HeaderID","HeaderClass","")
    this.Inhtml.AddElement("div","HeaderID","TitleID","TitleClass","")
    this.Inhtml.AddElement("p","TitleID","Txt_HeadID","Txt_HeadClass","Diplomacy")
    this.Inhtml.AddElement("p","HeaderID","Txt_codeID","Txt_codeClass",`Room code: ${roomCode}`)
    this.Inhtml.AddElement("div","HeaderID","diceTitleDiv","diceTitleDiv")
    this.Inhtml.AddElement("button", `diceTitleDiv`, "rollDice", "Players_btn", "Roll Dice",()=>{sendAction("rollDice",[])})
    let src_prod = `Img/Interroga.png`
    this.Inhtml.AddElement("img",`diceTitleDiv`, "diceFigure", "diceFigure","",() =>{}, src_prod)

  }
  RenderPlayers(DB){
      //Verifica se existe algo na parte dos jogadores e exclui 
      this.Inhtml.DeleteIfExist("#ContainerID")

      this.Inhtml.AddElement("div","masterID","ContainerID","ContainerClass","",()=>{})
      //Itera pela lista de jogares para renderizar a interface de cada um
      Object.keys(DB.players).forEach(id=>{
        const pN = DB.players[id].stats.position

        //Cria os elementos da interface do jogador

        this.Inhtml.AddElement("div","ContainerID", `IDPlayerStats_${(pN)}`, `ClassPlayerStats`)
        if (pN<2){
          if (pN<=1){
            this.Inhtml.AddElement("div",`IDPlayerStats_${(pN)}`, `IDPlayerProd_${(pN)}`, `ClassPlayerProd`)
            this.Inhtml.AddElement("div",`IDPlayerStats_${(pN)}`, `IDPlayerBank_${(pN)}`, `ClassPlayerBank`)
          }else{
            this.Inhtml.AddElement("div",`IDPlayerStats_${(pN)}`, `IDPlayerBank_${(pN)}`, `ClassPlayerBank`)
            this.Inhtml.AddElement("div",`IDPlayerStats_${(pN)}`, `IDPlayerProd_${(pN)}`, `ClassPlayerProd`)
          }
          this.Inhtml.AddElement("div",`IDPlayerStats_${(pN)}`, `IDPlayerDiv_${(pN)}`, `ClassPlayerDiv`)
          if(id == myClientId){
            this.Inhtml.AddElement("div",`IDPlayerDiv_${(pN)}`, `IDPlayerDivojb_${(pN)}`, `ClassPlayerDivobj`)
            this.Inhtml.AddElement("h1",`IDPlayerDivojb_${(pN)}`, `IDobjinfluency_${(pN)}`, `Classobj`, "Objectives:")
            this.Inhtml.AddElement("h1",`IDPlayerDivojb_${(pN)}`, `IDobjinfluency_${(pN)}`, `Classobj`, DB.players[id].objective[0])
            this.Inhtml.AddElement("h1",`IDPlayerDivojb_${(pN)}`, `IDobjinfluency_${(pN)}`, `Classobj`, DB.players[id].objective[1])
            this.Inhtml.AddElement("h1",`IDPlayerDivojb_${(pN)}`, `IDobjinfluency_${(pN)}`, `Classobj`, DB.players[id].objective[2][1])
          }
          this.Inhtml.AddElement("div",`IDPlayerDiv_${(pN)}`, `IDPlayerDivTitle_${(pN)}`, `ClassPlayerDivTitle`)
          this.Inhtml.AddElement("h1",`IDPlayerDivTitle_${(pN)}`, `IDPlayerTitle_${(pN)}`, `ClassPlayerTitle`, DB.players[id].stats.name)
          const textcolor = document.getElementById(`IDPlayerTitle_${(pN)}`)
          textcolor.style.color = DB.players[id].stats.color

        }else{
          this.Inhtml.AddElement("div",`IDPlayerStats_${(pN)}`, `IDPlayerDiv_${(pN)}`, `ClassPlayerDiv`)
          this.Inhtml.AddElement("div",`IDPlayerDiv_${(pN)}`, `IDPlayerDivTitle_${(pN)}`, `ClassPlayerDivTitle`)
          this.Inhtml.AddElement("h1",`IDPlayerDivTitle_${(pN)}`, `IDPlayerTitle_${(pN)}`, `ClassPlayerTitle`, DB.players[id].stats.name)
          const textcolor = document.getElementById(`IDPlayerTitle_${(pN)}`)
          textcolor.style.color = DB.players[id].stats.color

          this.Inhtml.AddElement("div",`IDPlayerStats_${(pN)}`, `IDPlayerDiv_${(pN)}`, `ClassPlayerDiv`)
          if(id == myClientId){
            this.Inhtml.AddElement("div",`IDPlayerDiv_${(pN)}`, `IDPlayerDivojb_${(pN)}`, `ClassPlayerDivobj`)
            this.Inhtml.AddElement("h1",`IDPlayerDivojb_${(pN)}`, `IDobjinfluency_${(pN)}`, `Classobj`, "Objectives:")
            this.Inhtml.AddElement("h1",`IDPlayerDivojb_${(pN)}`, `IDobjinfluency_${(pN)}`, `Classobj`, DB.players[id].objective[0])
            this.Inhtml.AddElement("h1",`IDPlayerDivojb_${(pN)}`, `IDobjinfluency_${(pN)}`, `Classobj`, DB.players[id].objective[1])
            this.Inhtml.AddElement("h1",`IDPlayerDivojb_${(pN)}`, `IDobjinfluency_${(pN)}`, `Classobj`, DB.players[id].objective[2][1])
          }

          if (pN<=1){
            this.Inhtml.AddElement("div",`IDPlayerStats_${(pN)}`, `IDPlayerProd_${(pN)}`, `ClassPlayerProd`)
            this.Inhtml.AddElement("div",`IDPlayerStats_${(pN)}`, `IDPlayerBank_${(pN)}`, `ClassPlayerBank`)
          }else{
            this.Inhtml.AddElement("div",`IDPlayerStats_${(pN)}`, `IDPlayerBank_${(pN)}`, `ClassPlayerBank`)
            this.Inhtml.AddElement("div",`IDPlayerStats_${(pN)}`, `IDPlayerProd_${(pN)}`, `ClassPlayerProd`)
          }
        }
        //Itera pelos stats dos jogadores

        Object.keys(DB.players[id].prod).forEach(key =>{
          this.Inhtml.AddElement("div",`IDPlayerProd_${(pN)}`, `IDPlayerProd_${key}_${(pN)}`, `ClassPlayerProd_each`)
          let src_prod = `/Img/Prod${key}.png`
          this.Inhtml.AddElement("img",`IDPlayerProd_${key}_${(pN)}`, "", "img_resources","",() =>{}, src_prod)
          this.Inhtml.AddElement("p",`IDPlayerProd_${key}_${(pN)}`, `P${pN}_prod${key}`, "ResourcesText", DB.players[id].prod[key],()=>{})

          this.Inhtml.AddElement("button", `IDPlayerProd_${key}_${(pN)}`, "", "Dec1", "-1",()=>{sendAction("ModifyValue",[id,"prod",key,-1])})
          this.Inhtml.AddElement("button", `IDPlayerProd_${key}_${(pN)}`, "", "Inc1", "+1",()=>{sendAction("ModifyValue",[id,"prod",key,1])})
          this.Inhtml.AddElement("button", `IDPlayerProd_${key}_${(pN)}`, "", "Dec5", "-5",()=>{sendAction("ModifyValue",[id,"prod",key,-5])})
          this.Inhtml.AddElement("button", `IDPlayerProd_${key}_${(pN)}`, "", "Inc5", "+5",()=>{sendAction("ModifyValue",[id,"prod",key,5])})
        })
        Object.keys(DB.players[id].bank).forEach(key =>{
          this.Inhtml.AddElement("div",`IDPlayerBank_${(pN)}`, `IDPlayerBank_${key}_${(pN)}`, `ClassPlayerBank_each`)
          let src_Bank = `/Img/${key}.png`
          this.Inhtml.AddElement("img",`IDPlayerBank_${key}_${(pN)}`, "", "img_resources","",() =>{}, src_Bank)
          this.Inhtml.AddElement("p",`IDPlayerBank_${key}_${(pN)}`, `P${pN}_bank${key}`, "ResourcesText", DB.players[id].bank[key],()=>{})

          this.Inhtml.AddElement("button", `IDPlayerBank_${key}_${(pN)}`, "", "Dec1", "-1",()=>{sendAction("ModifyValue",[id,"bank",key,-1])})
          this.Inhtml.AddElement("button", `IDPlayerBank_${key}_${(pN)}`, "", "Inc1", "+1",()=>{sendAction("ModifyValue",[id,"bank",key,1])})
          this.Inhtml.AddElement("button", `IDPlayerBank_${key}_${(pN)}`, "", "Dec5", "-5",()=>{sendAction("ModifyValue",[id,"bank",key,-5])})
          this.Inhtml.AddElement("button", `IDPlayerBank_${key}_${(pN)}`, "", "Inc5", "+5",()=>{sendAction("ModifyValue",[id,"bank",key,5])})
        })
      })
      
  }
  RenderMap(DB){
    //Deleta Table Anterior
    this.Inhtml.DeleteIfExist("#IDTable")

    //Cria o mapa
    this.Inhtml.AddElement("div", `masterID`, "IDTable", "ClassTable")
    this.Inhtml.AddElement("div", `IDTable`, "IDImgTable", "ClassImgTable")
    this.MapInsert(DB)
    this.MapZoom()
    this.MapMove()
  }
  MapInsert(DB){
    //Magia que troca imagem pelo SVG
    const table = document.getElementById("IDImgTable")
    table.innerHTML="<img id='idimg' src='SVGMap/MapaSVG.svg'/>"
    const img = document.getElementById("idimg")

    const fetchSvg = (image) => {
      fetch(image.src)
        .then((response) => response.text())
        .then((response) => {
          const span = document.createElement("span")
          span.innerHTML = response
          const inlineSvg = span.getElementsByTagName("svg")[0]
          image.parentNode.replaceChild(inlineSvg, image)
          this.ActionMap()
          this.updateAllCircle(DB)
          return true
        })
    }
    fetchSvg(img)

    
  }
  updateAllCircle(DB){
    Object.keys(DB.countries).forEach(country=>{
      Object.keys(DB.players).forEach(id=>{
        const pN = DB.players[id].stats.position
        const color = DB.countries[country].Players[pN]
        this.ColorPlayerCircle(country, pN, id, color, DB)
      })
    })
  }
  ActionMap(){
    //Adiciona no svg o evento de clicar e renderizar o custo do pais
    let listofCountries = document.getElementById("IDImgTable")
    let children = listofCountries.childNodes[0]

    //Gambiarra para selecionar a hierarquia certa
    children = children.children[0].children[2].children

    //Itera pelos childre
    for (let i=0;i<children.length;i++){
      children[i].addEventListener("click", ()=>{
        let text = children[i].id
        text = text.replace("_2","")
        this.RenderInfoCountry(text)
      })
    }
  }
  MapZoom(){
    const zoomElement = document.querySelector(".ClassImgTable");
    let ZOOM_SPEED = 0.1;
    document.addEventListener("wheel", function(e){
      if (e.deltaY > 0) {
        if(zoom>1){
          zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`; 
        }
        
      } else {
        if(zoom<3){
          zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
        }
      }
    });
  }
  MapMove(){
    const wrapper = document.querySelector("#IDTable")
    let map = wrapper.querySelector("#IDImgTable")
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
  RenderInfoCountry(NameofCountry){
    this.Inhtml.DeleteIfExist("#InfoTabID")

    const Country = DB.countries[NameofCountry]
    
    this.Inhtml.AddElement("div", `masterID`, "InfoTabID", "InfoTabClass")
    this.Inhtml.AddElement("p","InfoTabID","InfoCountry", "InfoCountry", Country.Nome)

    this.Inhtml.AddElement("p","InfoTabID","Infotxt", "Infotxt", "Cost")

    this.Inhtml.AddElement("img","InfoTabID","Infoenr", "Infoimgen", "","","SVGMap/Energia.svg")
    this.Inhtml.AddElement("img","InfoTabID","Infocom", "Infoimgco", "","","SVGMap/Comida.svg")
    this.Inhtml.AddElement("img","InfoTabID","Infoexe", "Infoimgex", "","","SVGMap/Exercito.svg")
    this.Inhtml.AddElement("img","InfoTabID","Infotec", "Infoimgte", "","","SVGMap/Tecnologia.svg")

    this.Inhtml.AddElement("p","InfoTabID","InfoCosten", "InfoCost", `+ ${Country.Energia*2}`)
    this.Inhtml.AddElement("p","InfoTabID","InfoCostc", "InfoCost", `+ ${Country.Comida*2}`)
    this.Inhtml.AddElement("p","InfoTabID","InfoCostex", "InfoCost", `+ ${Country.Exercito*2}`)
    this.Inhtml.AddElement("p","InfoTabID","InfoCostte", "InfoCost", `+ ${Country.Tecnologia*2}`)

    for(let x = 0; x < DB.AmountofPlayers; x++){
      this.Inhtml.AddText(`InfoTabID`,`checkbox_ID_P${x+1}`,`checkbox_txt_Class`,`P${x+1}`)
      this.Inhtml.AddInput(`checkbox`,`InfoTabID`, `checkbox_p${x}`,`Checkbox_p`,Country.Players[x])
    }
    this.Inhtml.AddBtn(`InfoTabID`,`ID_CheckInfluency`,`Players_btn`,`Confirmar Influência`,()=>{this.getInfluencyInfo(NameofCountry)})
  }
  RenderFooter(){
    this.Inhtml.DeleteIfExist("#IDFooter")
    this.Inhtml.AddElement("div","masterID", `IDFooter`, `ClassFooter`)
    this.Inhtml.AddElement("div",`IDFooter`, `actionLog`, `actionLog`)
      this.Inhtml.AddElement("h1",`actionLog`, `log3`, `log`)
      this.Inhtml.AddElement("h1",`actionLog`, `log2`, `log`)
      this.Inhtml.AddElement("h1",`actionLog`, `log1`, `log`)
    this.Inhtml.AddElement("button", `IDFooter`, "btn_NextRound", "Players_btn", "Next Round",()=>{sendAction("NextRound")})
    this.Inhtml.AddElement("p","IDFooter", `IDRound`, `ClassRound`, `Round: 0`) 
    this.Inhtml.AddElement("p","IDFooter", `IDQuarter`, `ClassRound`, `Quarter: 0`)
    this.Inhtml.AddElement("p","IDFooter", `IDYear`, `ClassRound`, `Year: 0`)
  }
  DisplayEvent(EventName, Effect){
    this.Inhtml.DeleteIfExist("#EventTabID")

    this.Inhtml.AddElement("div", `masterID`, "EventTabID", "EventTabClass", "Evento de Convenção!")
    this.Inhtml.AddElement("div", `EventTabID`, "Event1ID", "Event1Class")
    this.Inhtml.AddElement("p", `Event1ID`, " ", "InfoEvent",EventName)
    this.Inhtml.AddElement("p", `Event1ID`, " ", "Infotxt",Effect)
  }
  DisplaySecondEvent(EventName, Effect){
    let First = this.Inhtml.CheckIfExist("#EventTabID")
    if(!First){
      this.Inhtml.AddElement("div", `masterID`, "EventTabID", "EventTabClass", "Evento de Convenção!")
      
    }
    this.Inhtml.AddElement("div", `EventTabID`, "Event2ID", "Event2Class")
    this.Inhtml.AddElement("p", `Event2ID`, " ", "InfoEvent",EventName)
    this.Inhtml.AddElement("p", `Event2ID`, " ", "Infotxt",Effect)
  }
  ChangeColorTag(TagofCountry, NameCountry){
    const Country = document.getElementById(NameCountry)
    const Tag = document.getElementById(TagofCountry)
    Tag.style.backgroundColor = Country.style.fill
  }
  PutinCenterofCountry(TagofCountry, NameCountry){
    const Country = document.getElementById(TagofCountry)
    const center = this.FindDimensionsofCountry(NameCountry)
    Country.style.left = `${center.x_center}px`
    Country.style.top = `${center.y_center}px`
    // Country.style.width = `${center.width/2}px`
    // Country.style.height = `${center.height/2}px`
    Country.style.transform = "translate(-50%,-50%)" 
  } 
  FindDimensionsofElement(IDElement){
    const place = document.getElementById(IDElement)
    const x_place = parseInt(place.getBoundingClientRect().x)
    const y_place = parseInt(place.getBoundingClientRect().y)
    const w_place = parseInt(place.getBoundingClientRect().width)
    const h_place = parseInt(place.getBoundingClientRect().height)

    const center_x_place = (x_place+w_place/2)
    const center_y_place = (y_place+h_place/2)
    const dimensions = {left: x_place,top: y_place,width:w_place,height: h_place,x_center: center_x_place,y_center: center_y_place}
    return dimensions
  }
  ColorPlayerCircle(country, pN, id, color){
    let circle = document.getElementById(`${country}_2`).children[2].children[pN]
    if (color){ 
        circle.style.fill = DB.players[id].stats.color
        circle.style['stroke-opacity'] = "1";
        circle.style['stroke-width'] = "2";
    }else{
        circle.style.fill = "none"
        circle.style.stroke = "black";
        circle.style['stroke-opacity'] = "0.12";
        circle.style['stroke-width'] = "1";
    }
  }
  UpdateFooter(fase){
    const round = document.getElementById("IDRound")
    const Quarter = document.getElementById("IDQuarter")
    const Year = document.getElementById("IDYear")
    round.innerHTML = `Round: ${fase.Round}`
    Quarter.innerHTML = `Quarter: ${fase.Quarter}`
    Year.innerHTML = `Year: ${fase.Year}`
  }
  changeValueofPlayer(DB){
    Object.keys(DB.players).forEach(id=>{
      const pN = DB.players[id].stats.position
      Object.keys(DB.players[id].prod).forEach(keyprod=>{
        const tag = document.getElementById(`P${pN}_prod${keyprod}`)
        tag.innerHTML = DB.players[id].prod[keyprod]
      })
      Object.keys(DB.players[id].bank).forEach(keyprod=>{
        const tag = document.getElementById(`P${pN}_bank${keyprod}`)
        tag.innerHTML = DB.players[id].bank[keyprod]
      })
    })
  }
  getInfluencyInfo(NameofCountry){
    let influencyplayers = [false,false,false,false]
    Object.keys(DB.players).forEach(id=>{
      const pN = DB.players[id].stats.position

        let test = document.getElementById(`checkbox_p${pN}`).checked
        if(test==true){
          influencyplayers[pN]=true
        }
      
    })
    sendAction("UpdateInfluency",[NameofCountry, influencyplayers])
  }
  updateProdBank(type){
    //renderiza a prod ou bank dos jogadores na tela
    Object.keys(DB.players).forEach(id =>{
      Object.keys(DB.players[id][type]).forEach(key =>{
          this.ChangePlayerValue(id,type,key,DB.players[id][type][key])
      })
    }) 
  }
 
}

