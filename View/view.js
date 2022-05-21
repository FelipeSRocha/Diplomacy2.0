class View{
  constructor(){
      this.Title = document.getElementById("HeaderID")
      this.Table = document.getElementById("ContainerID")
      this.ListofPlayers = DB.Players
      this.Inhtml = new InHTML()
  }
  // RenderStartScreen(){
  //   this.RenderTitle()
  //   this.RenderTable()  
  // }
  // ReloadTable(){
  //   this.RenderPlayers()
  //   this.RenderFooter()
  // }
  // RenderTable(){
  //   this.RenderPlayers()
  //   this.RenderMap()
  //   this.RenderFooter()
  // }
  RenderTitle(){
    // Verifica se existe algo no titulo e exclui 
    this.Inhtml.DeleteIfExist("#HeaderID")

    //Adiciona Titulo
    this.Inhtml.AddElement("div","masterID","HeaderID","HeaderClass","")
    this.Inhtml.AddElement("div","HeaderID","TitleID","TitleClass","")
    this.Inhtml.AddElement("p","TitleID","Txt_HeadID","Txt_HeadClass","Diplomacy")
    this.Inhtml.AddElement("div","HeaderID","Btn_HeadID","Btn_HeadClass","")

    //Adiciona os botões Iniciais
    this.Inhtml.AddElement("button", `Btn_HeadID`, "btn_ResetGame", "Players_btn", "Reset Game",()=>{resetGame()}, "","flex:100%")
    this.Inhtml.AddElement("button", `Btn_HeadID`, "Btn_RemovePlayer", "Players_btn", 'Remove Player', () => {DB.RemovePlayer()}, "", "flex:45%")
    this.Inhtml.AddElement("button",`Btn_HeadID`, "Btn_AddPlayer","Players_btn", 'Add Player',() => {DB.AddPlayer()}, "", "flex:45%")
    this.Inhtml.AddElement("button", `Btn_HeadID`, "btn_NextRound", "Players_btn", "Next Round",()=>{MEC.NextRound()}, "", "flex:100%")
  }
  RenderPlayers(){
      //Verifica se existe algo na parte dos jogadores e exclui 
      this.Inhtml.DeleteIfExist("#ContainerID")

      this.Inhtml.AddElement("div","masterID","ContainerID","ContainerClass","",()=>{})
      let i = 0
      //Itera pela lista de jogares para renderizar a interface de cada um
      for (let i = 0; i < DB.AmountofPlayers; i++){
        //Cria os elementos da interface do jogador
        this.Inhtml.AddElement("div","ContainerID", `IDPlayerStats_${(i+1)}`, `ClassPlayerStats`)
        if (i<2){
          if (i<=1){
            this.Inhtml.AddElement("div",`IDPlayerStats_${(i+1)}`, `IDPlayerProd_${(i+1)}`, `ClassPlayerProd`)
            this.Inhtml.AddElement("div",`IDPlayerStats_${(i+1)}`, `IDPlayerBank_${(i+1)}`, `ClassPlayerBank`)
          }else{
            this.Inhtml.AddElement("div",`IDPlayerStats_${(i+1)}`, `IDPlayerBank_${(i+1)}`, `ClassPlayerBank`)
            this.Inhtml.AddElement("div",`IDPlayerStats_${(i+1)}`, `IDPlayerProd_${(i+1)}`, `ClassPlayerProd`)
          }
          this.Inhtml.AddElement("h1",`IDPlayerStats_${(i+1)}`, `IDPlayerTitle_${(i+1)}`, `ClassPlayerTitle`, `Player ${i+1}`)
        }else{
          this.Inhtml.AddElement("h1",`IDPlayerStats_${(i+1)}`, `IDPlayerTitle_${(i+1)}`, `ClassPlayerTitle`, `Player ${i+1}`)
          if (i<=1){
            this.Inhtml.AddElement("div",`IDPlayerStats_${(i+1)}`, `IDPlayerProd_${(i+1)}`, `ClassPlayerProd`)
            this.Inhtml.AddElement("div",`IDPlayerStats_${(i+1)}`, `IDPlayerBank_${(i+1)}`, `ClassPlayerBank`)
          }else{
            this.Inhtml.AddElement("div",`IDPlayerStats_${(i+1)}`, `IDPlayerBank_${(i+1)}`, `ClassPlayerBank`)
            this.Inhtml.AddElement("div",`IDPlayerStats_${(i+1)}`, `IDPlayerProd_${(i+1)}`, `ClassPlayerProd`)
          }
        }
        //Itera pelos stats dos jogadores
        Object.keys(this.ListofPlayers[i]).forEach(key =>{
            let text = ""
            switch(key){

                //Renderiza a parte de produção do jogador
                case "ProdEnergia":
                case "ProdComida":
                case "ProdExercito":
                case "ProdTecnologia":
                  this.Inhtml.AddElement("div",`IDPlayerProd_${(1+i)}`, `IDPlayerProd_${key}_${(1+i)}`, `ClassPlayerProd_each`)

                    let src_prod = `/Img/${key}.png`
                    this.Inhtml.AddElement("img",`IDPlayerProd_${key}_${(1+i)}`, "", "img_resources","",() =>{}, src_prod)

                    text = `+ ${this.ListofPlayers[i][key]}`
                    this.Inhtml.AddElement("p",`IDPlayerProd_${key}_${(1+i)}`, "", "ResourcesText", text,()=>{})

                    this.Inhtml.AddElement("button", `IDPlayerProd_${key}_${(1+i)}`, "", "Dec1", "-1",()=>{DB.Players[i].ModifyValue(key,-1)})
                    this.Inhtml.AddElement("button", `IDPlayerProd_${key}_${(1+i)}`, "", "Inc1", "+1",()=>{DB.Players[i].ModifyValue(key,1)})
                    this.Inhtml.AddElement("button", `IDPlayerProd_${key}_${(1+i)}`, "", "Dec5", "-5",()=>{DB.Players[i].ModifyValue(key,-5)})
                    this.Inhtml.AddElement("button", `IDPlayerProd_${key}_${(1+i)}`, "", "Inc5", "+5",()=>{DB.Players[i].ModifyValue(key,5)})
                    break

                //Renderiza a parte do banco do jogador
                case "Energia":
                case "Comida":
                case "Exercito":
                case "Tecnologia":
                  this.Inhtml.AddElement("div",`IDPlayerBank_${(1+i)}`, `IDPlayerBank_${key}_${(1+i)}`, "ClassPlayerBank_each")

                    let src_Bank = `/Img/${key}.png`
                    this.Inhtml.AddElement("img",`IDPlayerBank_${key}_${(1+i)}`, "", "img_resources","",() =>{}, src_Bank)

                    text = `+ ${this.ListofPlayers[i][key]}`
                    this.Inhtml.AddElement("p",`IDPlayerBank_${key}_${(1+i)}`, "", "ResourcesText", text,()=>{})

                    this.Inhtml.AddElement("button", `IDPlayerBank_${key}_${(1+i)}`, "", "Dec1", "-1",()=>{DB.Players[i].ModifyValue(key,-1)})
                    this.Inhtml.AddElement("button", `IDPlayerBank_${key}_${(1+i)}`, "", "Inc1", "+1",()=>{DB.Players[i].ModifyValue(key,1)})
                    this.Inhtml.AddElement("button", `IDPlayerBank_${key}_${(1+i)}`, "", "Dec5", "-5",()=>{DB.Players[i].ModifyValue(key,-5)})
                    this.Inhtml.AddElement("button", `IDPlayerBank_${key}_${(1+i)}`, "", "Inc5", "+5",()=>{DB.Players[i].ModifyValue(key,5)})
                    break
            }
        })
      } 
      
  }
  RenderMap(){
    //Deleta Table Anterior
    this.Inhtml.DeleteIfExist("#IDTable")

    //Cria o mapa
    this.Inhtml.AddElement("div", `masterID`, "IDTable", "ClassTable")
    this.Inhtml.AddElement("div", `IDTable`, "IDImgTable", "ClassImgTable")
    this.MapInsert()
    this.MapZoom()
    this.MapMove()
  }
  MapInsert(){
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
          return true
        })
    }
    fetchSvg(img)
    
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

    for(let x = 1; x <= DB.AmountofPlayers; x++){
      this.Inhtml.AddText(`InfoTabID`,`checkbox_ID_P${x}`,`checkbox_txt_Class`,`P${x}`)
      this.Inhtml.AddInput(`checkbox`,`InfoTabID`, `checkbox_p${x}`,`Checkbox_p`,Country.Players[x-1])
    }
    this.Inhtml.AddBtn(`InfoTabID`,`ID_CheckInfluency`,`Players_btn`,`Confirmar Influência`,()=>this.CheckInfluency(NameofCountry))

  }
  CheckInfluency(NameofCountry){
    let influencyplayers = [false,false,false,false]
    for(let i=1;i<=DB.AmountofPlayers;i++){
      let test = document.getElementById(`checkbox_p${i}`).checked
      if(test==true){
        influencyplayers[i-1]=true
      }
    }
    DB.CheckPlayersProduction(NameofCountry,influencyplayers)
  }
  RenderFooter(){
    this.Inhtml.DeleteIfExist("#IDFooter")

    this.Inhtml.AddElement("div","masterID", `IDFooter`, `ClassFooter`)

    let fase = MEC.CheckRound()

    this.Inhtml.AddElement("p","IDFooter", `IDRound`, `ClassRound`, `Round: ${fase.Round}`) 
    this.Inhtml.AddElement("p","IDFooter", `IDQuarter`, `ClassRound`, `Quarter: ${fase.Quarter}`)
    this.Inhtml.AddElement("p","IDFooter", `IDYear`, `ClassRound`, `Year: ${fase.Year}`)
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
    console.log(First)
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
    console.log(center)
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
    console.log(dimensions)
    return dimensions
  }

}

