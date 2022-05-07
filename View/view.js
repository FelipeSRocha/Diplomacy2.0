class View{
    constructor(){
        this.Title = document.getElementById("HeaderID")
        this.Table = document.getElementById("ContainerID")
        this.ListofPlayers = Diplomacy.PlayerDB.Players
    }
    RenderStartScreen(){
        this.RenderTitle()
        this.RenderTable()  
        this.Zoom()
        this.MoveMap()
        // this.RenderCountries()
    }
    RenderTitle(){
        // Verifica se existe algo no titulo e exclui 
        const DivExist = document.querySelectorAll("#HeaderID").length > 0
        if(DivExist){
            const element = document.getElementById('HeaderID');
            element.remove()
        }
        
        let header = new AddElement
        header.AddElement("div","masterID","HeaderID","HeaderClass","")

        let Title = new AddElement
        Title.AddElement("div","HeaderID","TitleID","TitleClass","")
        
        let Txt_Head = new AddElement
        Txt_Head.AddElement("p","TitleID","Txt_HeadID","Txt_HeadClass","Diplomacy")

        let Btn_Head = new AddElement
        Btn_Head.AddElement("div","HeaderID","Btn_HeadID","Btn_HeadClass","")

        //Adiciona os botões Iniciais
        const btn_ResetGame = new AddElement
        btn_ResetGame.AddElement("button", `Btn_HeadID`, "btn_ResetGame", "Players_btn", "Reset Game",()=>{Diplomacy.ResetGame()}, "","flex:100%")

        const btn_RemovePlayer = new AddElement
        btn_RemovePlayer.AddElement("button", `Btn_HeadID`, "Btn_RemovePlayer", "Players_btn", 'Remove Player', () => {Diplomacy.PlayerDB.RemovePlayer()}, "", "flex:45%")

        const btn_AddPlayer = new AddElement
        btn_AddPlayer.AddElement("button",`Btn_HeadID`, "Btn_AddPlayer","Players_btn", 'Add Player',() => {Diplomacy.PlayerDB.AddPlayer()}, "", "flex:45%")
        
        const btn_NextRound = new AddElement
        btn_NextRound.AddElement("button", `Btn_HeadID`, "btn_NextRound", "Players_btn", "Next Round",()=>{Diplomacy.NextRound()}, "", "flex:100%")

    }
    RenderTable(){
        this.RenderPlayers()
        this.RenderMap()
        this.RenderInfoTab()
        this.RenderFooter()
    }
    RenderPlayers(){
        //Verifica se existe algo na parte dos jogadores e exclui 
        const DivExist = document.querySelectorAll("#ContainerID").length > 0
        if(DivExist){
            const element = document.getElementById('ContainerID');
            element.remove()
        }

        let container = new AddElement
        container.AddElement("div","masterID","ContainerID","ContainerClass","",()=>{})

        //Itera pela lista de jogares para renderizar a interface de cada um
        this.ListofPlayers.forEach((el, i) =>{

            //Cria os elementos da interface do jogador
            // let PlayerDiv = new AddElement
            // PlayerDiv.AddElement("div","ContainerID", `IDPlayerDiv_${(1+i)}`, `ClassPlayerDiv`)

            let PlayerStats = new AddElement
            PlayerStats.AddElement("div","ContainerID", `IDPlayerStats_${(1+i)}`, `ClassPlayerStats`)

            let PlayerTitle = new AddElement
            if (i<2){
                if (i<=1){
                    let PlayerProd = new AddElement
                    PlayerProd.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerProd_${(1+i)}`, `ClassPlayerProd`)
                    let PlayerBank = new AddElement
                    PlayerBank.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerBank_${(1+i)}`, `ClassPlayerBank`)
                }else{
                    let PlayerBank = new AddElement
                    PlayerBank.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerBank_${(1+i)}`, `ClassPlayerBank`)
                    let PlayerProd = new AddElement
                    PlayerProd.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerProd_${(1+i)}`, `ClassPlayerProd`)
                }
                PlayerTitle.AddElement("h1",`IDPlayerStats_${(1+i)}`, `IDPlayerTitle_${(1+i)}`, `ClassPlayerTitle`, `Player ${i+1}`)
            }else{
                PlayerTitle.AddElement("h1",`IDPlayerStats_${(1+i)}`, `IDPlayerTitle_${(1+i)}`, `ClassPlayerTitle`, `Player ${i+1}`)
                if (i<=1){
                    let PlayerProd = new AddElement
                    PlayerProd.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerProd_${(1+i)}`, `ClassPlayerProd`)
                    let PlayerBank = new AddElement
                    PlayerBank.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerBank_${(1+i)}`, `ClassPlayerBank`)
                }else{
                    let PlayerBank = new AddElement
                    PlayerBank.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerBank_${(1+i)}`, `ClassPlayerBank`)
                    let PlayerProd = new AddElement
                    PlayerProd.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerProd_${(1+i)}`, `ClassPlayerProd`)
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
                        let ProdDivEach = new AddElement
                        ProdDivEach.AddElement("div",`IDPlayerProd_${(1+i)}`, `IDPlayerProd_${key}_${(1+i)}`, `ClassPlayerProd_each`)

                        let img_Prod = new AddElement
                        let src_prod = `/Img/${key}.png`
                        img_Prod.AddElement("img",`IDPlayerProd_${key}_${(1+i)}`, "", "img_resources","",() =>{}, src_prod)

                        let PlayerProd = new AddElement
                        text = `+ ${el[key]}`
                        PlayerProd.AddElement("p",`IDPlayerProd_${key}_${(1+i)}`, "", "ResourcesText", text,()=>{})

                        let btnProd_decrease_1 = new AddElement
                        btnProd_decrease_1.AddElement("button", `IDPlayerProd_${key}_${(1+i)}`, "", "Dec1", "-1",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,-1)})
                        let btnProd_increase_1 = new AddElement
                        btnProd_increase_1.AddElement("button", `IDPlayerProd_${key}_${(1+i)}`, "", "Inc1", "+1",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,1)})
                        let btnProd_decrease_5 = new AddElement
                        btnProd_decrease_5.AddElement("button", `IDPlayerProd_${key}_${(1+i)}`, "", "Dec5", "-5",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,-5)})
                        let btnProd_increase_5 = new AddElement
                        btnProd_increase_5.AddElement("button", `IDPlayerProd_${key}_${(1+i)}`, "", "Inc5", "+5",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,5)})
                        break

                    //Renderiza a parte do banco do jogador
                    case "Energia":
                    case "Comida":
                    case "Exercito":
                    case "Tecnologia":
                        let BankDivEach = new AddElement
                        BankDivEach.AddElement("div",`IDPlayerBank_${(1+i)}`, `IDPlayerBank_${key}_${(1+i)}`, "ClassPlayerBank_each")

                        let img_Bank = new AddElement
                        let src_Bank = `/Img/${key}.png`
                        img_Bank.AddElement("img",`IDPlayerBank_${key}_${(1+i)}`, "", "img_resources","",() =>{}, src_Bank)

                        let PlayerBank = new AddElement
                        text = `+ ${el[key]}`
                        PlayerBank.AddElement("p",`IDPlayerBank_${key}_${(1+i)}`, "", "ResourcesText", text,()=>{})

                        let btnBank_decrease_1 = new AddElement
                        btnBank_decrease_1.AddElement("button", `IDPlayerBank_${key}_${(1+i)}`, "", "Dec1", "-1",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,-1)})
                        let btnBank_increase_1 = new AddElement
                        btnBank_increase_1.AddElement("button", `IDPlayerBank_${key}_${(1+i)}`, "", "Inc1", "+1",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,1)})
                        let btnBank_decrease_5 = new AddElement
                        btnBank_decrease_5.AddElement("button", `IDPlayerBank_${key}_${(1+i)}`, "", "Dec5", "-5",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,-5)})
                        let btnBank_increase_5 = new AddElement
                        btnBank_increase_5.AddElement("button", `IDPlayerBank_${key}_${(1+i)}`, "", "Inc5", "+5",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,5)})
                        break
                }
            })
            
        })
    }
    RenderMap(){
        const DivExist = document.querySelectorAll("#IDTable").length > 0
        if(DivExist){
            const element = document.getElementById('IDTable');
            element.remove()
        }
        const Table = new AddElement
        Table.AddElement("div", `masterID`, "IDTable", "ClassTable")
        const ImgTable = new AddElement 
        ImgTable.AddElement("div", `IDTable`, "IDImgTable", "ClassImgTable")
        this.InsertMap()
        
    }
    InsertMap(){
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
      let listofCountries = document.getElementById("IDImgTable")
      let children = listofCountries.childNodes[0]
      children = children.children[0].children[2].children
      for (let i=0;i<children.length;i++){
        children[i].addEventListener("click", ()=>{
          let text = children[i].id
          text = text.replace("_2","")
          this.RenderInfoCountry(text)
        })
      }
      
    }
    Zoom(){
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
    MoveMap(){
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
      const InfoTab = new AddElement
      InfoTab.AddElement("div", `ContainerID`, "InfoTabID", "InfoTabClass")
    }
    RenderInfoCountry(NameofCountry){
      const DivExist = document.querySelectorAll("#TabID").length > 0
      if(DivExist){
          const element = document.getElementById('TabID');
          element.remove()
      }
      console.log(Territories)
      const pais = Territories.countries[NameofCountry]
      
      const Tab = new AddElement
      Tab.AddElement("div", `InfoTabID`, "TabID", "TabClass")
      const InfoCountry = new AddElement
      InfoCountry.AddElement("p","TabID","InfoCountry", "InfoCountry", pais.Nome)

      const cost = new AddElement
      cost.AddElement("p","TabID","Infotxt", "Infotxt", "Cost")

      const imgenergia = new AddElement
      imgenergia.AddElement("img","TabID","Infoenr", "Infoimgen", "","","SVGMap/Energia.svg")
      const imgcomida = new AddElement
      imgcomida.AddElement("img","TabID","Infocom", "Infoimgco", "","","SVGMap/Comida.svg")
      const imgexercito = new AddElement
      imgexercito.AddElement("img","TabID","Infoexe", "Infoimgex", "","","SVGMap/Exercito.svg")
      const imgtecnologia = new AddElement
      imgtecnologia.AddElement("img","TabID","Infotec", "Infoimgte", "","","SVGMap/Tecnologia.svg")

      const Energia = new AddElement
      Energia.AddElement("p","TabID","InfoCosten", "InfoCost", `+ ${pais.Energia*2}`)
      const Comida = new AddElement
      Comida.AddElement("p","TabID","InfoCostc", "InfoCost", `+ ${pais.Comida*2}`)
      const Exercito = new AddElement
      Exercito.AddElement("p","TabID","InfoCostex", "InfoCost", `+ ${pais.Exercito*2}`)
      const Tecnologia = new AddElement
      Tecnologia.AddElement("p","TabID","InfoCostte", "InfoCost", `+ ${pais.Tecnologia*2}`)

    }
    RenderFooter(){
        const DivExist = document.querySelectorAll("#IDFooter").length > 0
        if(DivExist){
            const element = document.getElementById('IDFooter');
            element.remove()
        }

        let Footer = new AddElement
        Footer.AddElement("div","masterID", `IDFooter`, `ClassFooter`)

        let check = Diplomacy.CheckRound()
        if(check[0]>1 && check[1] ==1 || check[1] == 3){
            console.log("Evento de Convenção!!")
        }
        let Round = new AddElement
        Round.AddElement("p","IDFooter", `IDRound`, `ClassRound`, `Round: ${check[0]}`) 
        let Quarter = new AddElement
        Quarter.AddElement("p","IDFooter", `IDQuarter`, `ClassRound`, `Quarter: ${check[1]}`)
        let Year = new AddElement
        Year.AddElement("p","IDFooter", `IDYear`, `ClassRound`, `Year: ${check[2]}`)
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

