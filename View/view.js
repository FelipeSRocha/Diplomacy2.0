class View{
    constructor(){
        this.Title = document.getElementById("HeaderID")
        this.Table = document.getElementById("ContainerID")
        this.ListofPlayers = Diplomacy.PlayerDB.Players
        this.Inhtml = new InHTML()
    }
    RenderStartScreen(){
      this.RenderTitle()
      this.RenderTable()  
    }
    ReloadTable(){
      this.RenderPlayers()
      this.RenderInfoTab()
      this.RenderFooter()
    }
    RenderTable(){
      this.RenderPlayers()
      this.RenderMap()
      this.RenderInfoTab()
      this.RenderFooter()
    }
    RenderTitle(){
      // Verifica se existe algo no titulo e exclui 
      this.Inhtml.DeleteIfExist("#HeaderID")

      //Adiciona Titulo
      this.Inhtml.AddElement("div","masterID","HeaderID","HeaderClass","")
      this.Inhtml.AddElement("div","HeaderID","TitleID","TitleClass","")
      this.Inhtml.AddElement("p","TitleID","Txt_HeadID","Txt_HeadClass","Diplomacy")
      this.Inhtml.AddElement("div","HeaderID","Btn_HeadID","Btn_HeadClass","")

      //Adiciona os botões Iniciais
      this.Inhtml.AddElement("button", `Btn_HeadID`, "btn_ResetGame", "Players_btn", "Reset Game",()=>{Diplomacy.ResetGame()}, "","flex:100%")
      this.Inhtml.AddElement("button", `Btn_HeadID`, "Btn_RemovePlayer", "Players_btn", 'Remove Player', () => {Diplomacy.PlayerDB.RemovePlayer()}, "", "flex:45%")
      this.Inhtml.AddElement("button",`Btn_HeadID`, "Btn_AddPlayer","Players_btn", 'Add Player',() => {Diplomacy.PlayerDB.AddPlayer()}, "", "flex:45%")
      this.Inhtml.AddElement("button", `Btn_HeadID`, "btn_NextRound", "Players_btn", "Next Round",()=>{Diplomacy.NextRound()}, "", "flex:100%")

    }
    RenderPlayers(){
        //Verifica se existe algo na parte dos jogadores e exclui 
        this.Inhtml.DeleteIfExist("#ContainerID")

        this.Inhtml.AddElement("div","masterID","ContainerID","ContainerClass","",()=>{})

        //Itera pela lista de jogares para renderizar a interface de cada um
        this.ListofPlayers.forEach((el, i) =>{

            //Cria os elementos da interface do jogador
            this.Inhtml.AddElement("div","ContainerID", `IDPlayerStats_${(1+i)}`, `ClassPlayerStats`)

            if (i<2){
                if (i<=1){
                  this.Inhtml.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerProd_${(1+i)}`, `ClassPlayerProd`)
                  this.Inhtml.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerBank_${(1+i)}`, `ClassPlayerBank`)
                }else{
                  this.Inhtml.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerBank_${(1+i)}`, `ClassPlayerBank`)
                  this.Inhtml.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerProd_${(1+i)}`, `ClassPlayerProd`)
                }
                this.Inhtml.AddElement("h1",`IDPlayerStats_${(1+i)}`, `IDPlayerTitle_${(1+i)}`, `ClassPlayerTitle`, `Player ${i+1}`)
            }else{
              this.Inhtml.AddElement("h1",`IDPlayerStats_${(1+i)}`, `IDPlayerTitle_${(1+i)}`, `ClassPlayerTitle`, `Player ${i+1}`)
                if (i<=1){
                  this.Inhtml.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerProd_${(1+i)}`, `ClassPlayerProd`)
                  this.Inhtml.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerBank_${(1+i)}`, `ClassPlayerBank`)
                }else{
                  this.Inhtml.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerBank_${(1+i)}`, `ClassPlayerBank`)
                  this.Inhtml.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerProd_${(1+i)}`, `ClassPlayerProd`)
                }
            }
            //Itera pelos stats dos jogadores
            Object.keys(el).forEach(key =>{
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

                        text = `+ ${el[key]}`
                        this.Inhtml.AddElement("p",`IDPlayerProd_${key}_${(1+i)}`, "", "ResourcesText", text,()=>{})

                        this.Inhtml.AddElement("button", `IDPlayerProd_${key}_${(1+i)}`, "", "Dec1", "-1",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,-1)})
                        this.Inhtml.AddElement("button", `IDPlayerProd_${key}_${(1+i)}`, "", "Inc1", "+1",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,1)})
                        this.Inhtml.AddElement("button", `IDPlayerProd_${key}_${(1+i)}`, "", "Dec5", "-5",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,-5)})
                        this.Inhtml.AddElement("button", `IDPlayerProd_${key}_${(1+i)}`, "", "Inc5", "+5",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,5)})
                        break

                    //Renderiza a parte do banco do jogador
                    case "Energia":
                    case "Comida":
                    case "Exercito":
                    case "Tecnologia":
                      this.Inhtml.AddElement("div",`IDPlayerBank_${(1+i)}`, `IDPlayerBank_${key}_${(1+i)}`, "ClassPlayerBank_each")

                        let src_Bank = `/Img/${key}.png`
                        this.Inhtml.AddElement("img",`IDPlayerBank_${key}_${(1+i)}`, "", "img_resources","",() =>{}, src_Bank)

                        text = `+ ${el[key]}`
                        this.Inhtml.AddElement("p",`IDPlayerBank_${key}_${(1+i)}`, "", "ResourcesText", text,()=>{})

                        this.Inhtml.AddElement("button", `IDPlayerBank_${key}_${(1+i)}`, "", "Dec1", "-1",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,-1)})
                        this.Inhtml.AddElement("button", `IDPlayerBank_${key}_${(1+i)}`, "", "Inc1", "+1",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,1)})
                        this.Inhtml.AddElement("button", `IDPlayerBank_${key}_${(1+i)}`, "", "Dec5", "-5",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,-5)})
                        this.Inhtml.AddElement("button", `IDPlayerBank_${key}_${(1+i)}`, "", "Inc5", "+5",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,5)})
                        break
                }
            })
            
        })
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

      //Itera pelos childrens
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
    RenderInfoTab(){
      this.Inhtml.AddElement("div", `masterID`, "InfoTabID", "InfoTabClass")
    }
    RenderFooter(){
      this.Inhtml.DeleteIfExist("#IDFooter")

      this.Inhtml.AddElement("div","masterID", `IDFooter`, `ClassFooter`)

      let check = Diplomacy.CheckRound()
      if(check[0]>1 && check[1] ==1 || check[1] == 3){
          console.log("Evento de Convenção!!")
      }
      this.Inhtml.AddElement("p","IDFooter", `IDRound`, `ClassRound`, `Round: ${check[0]}`) 
      this.Inhtml.AddElement("p","IDFooter", `IDQuarter`, `ClassRound`, `Quarter: ${check[1]}`)
      this.Inhtml.AddElement("p","IDFooter", `IDYear`, `ClassRound`, `Year: ${check[2]}`)
    }
    RenderInfoCountry(NameofCountry){
      this.Inhtml.DeleteIfExist("#TabID")

      console.log(Territories)
      const pais = Territories.countries[NameofCountry]
      
      this.Inhtml.AddElement("div", `InfoTabID`, "TabID", "TabClass")
      this.Inhtml.AddElement("p","TabID","InfoCountry", "InfoCountry", pais.Nome)

      this.Inhtml.AddElement("p","TabID","Infotxt", "Infotxt", "Cost")

      this.Inhtml.AddElement("img","TabID","Infoenr", "Infoimgen", "","","SVGMap/Energia.svg")
      this.Inhtml.AddElement("img","TabID","Infocom", "Infoimgco", "","","SVGMap/Comida.svg")
      this.Inhtml.AddElement("img","TabID","Infoexe", "Infoimgex", "","","SVGMap/Exercito.svg")
      this.Inhtml.AddElement("img","TabID","Infotec", "Infoimgte", "","","SVGMap/Tecnologia.svg")

      this.Inhtml.AddElement("p","TabID","InfoCosten", "InfoCost", `+ ${pais.Energia*2}`)
      this.Inhtml.AddElement("p","TabID","InfoCostc", "InfoCost", `+ ${pais.Comida*2}`)
      this.Inhtml.AddElement("p","TabID","InfoCostex", "InfoCost", `+ ${pais.Exercito*2}`)
      this.Inhtml.AddElement("p","TabID","InfoCostte", "InfoCost", `+ ${pais.Tecnologia*2}`)

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
    AdjustPlace(NameCountry){
      let x = 0
      let y = 0
      switch (NameCountry){
        case "Brasil":
           x = +10
           y = -10
          break
        case "Chile":
          x = -10
          y = -50
          break
        case "Venezuela":
          x = -15
          break
        case "Mexico":
          x= -20
          break
        case "Jamaica":
          x = -10
          y = 10
          break
        case "Nova York":
          x = 10
          y = 10
          break
        case "Ottawa":
          x = -10
          y = 5
          break
        case "Labrador":
          x = -15
          y = 5
          break
        case "Vancouver":
          x = 10
          y = 5
          break
        case "Alaska":
          x = -15
          y = 5
          break
        case "Mackenzie":
          x = -20
          y = 60
          break
        case "Gronelandia":
          x = 25
          y = 0
          break
        case "Islandia":
          x = -10
          y = 5
          break
        case "Franca":
          x = -25
          y = 10
          break
        case "Inglaterra":
          x = -10
          break
        case "Alemanha":
          x = -5
          y = 5
          break
        case "Polonia":
          x = -8
          y = 8
          break
        case "Moscou":
          x = -5
          y = 10
          break
        case "Egito":
          x = -10
          y = 5
          break
        case "Sudao":
          x = -10
          y = -15
          break
        case "AfricaS":
          x = -10
          y = 5
          break
        case "Aral":
          x = -10
          y = 10
          break
        case "Omsk":
          x = -35
          y = 10
          break
        case "Dudinka":
          x = -10
          break
        case "Siberia":
          x = -5
          y = 10
          break
        case "Tchita":
          x = -5
          y = 20
          break
        case "China":
          x = -5
          y = 25
          break
        case "Mongolia":
          x = -5
          y = 15
          break
        case "India":
          x = -10
          y = 0
          break
        case "Vietna":
          x = -10
          y = 10
          break
        case "Vladvostok":
          x = -10
          y = -10
          break
        case "Japao":
          x = -5
          y = 15  
          break
        case "Borneu":
          x = -5
          y = 10  
          break
        case "Sumatra":
          x = -10
          y = 10  
          break
        case "Guine":
          x = -10
          y = 0  
          break
        case "Australia":
          x = 0
          y = -10
          break
      }
      return {x: x, y: y}
    }
}

