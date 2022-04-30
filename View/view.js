class View{
    constructor(){
        this.Title = document.getElementById("HeaderID")
        this.Table = document.getElementById("ContainerID")
        this.ListofPlayers = Diplomacy.PlayerDB.Players
    }
    RenderStartScreen(){
        this.RenderTitle()
        this.RenderTable()
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
            let PlayerDiv = new AddElement
            PlayerDiv.AddElement("div","ContainerID", `IDPlayerDiv_${(1+i)}`, `ClassPlayerDiv`)

            let PlayerStats = new AddElement
            PlayerStats.AddElement("div",`IDPlayerDiv_${(1+i)}`, `IDPlayerStats_${(1+i)}`, `ClassPlayerStats`)

            let PlayerTitle = new AddElement
            PlayerTitle.AddElement("h1",`IDPlayerStats_${(1+i)}`, `IDPlayerTitle_${(1+i)}`, `ClassPlayerTitle`, `Player ${i+1}`)
            let PlayerProd = new AddElement
            PlayerProd.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerProd_${(1+i)}`, `ClassPlayerProd`)
            let PlayerBank = new AddElement
            PlayerBank.AddElement("div",`IDPlayerStats_${(1+i)}`, `IDPlayerBank_${(1+i)}`, `ClassPlayerBank`)

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
                        ProdDivEach.AddElement("div",`IDPlayerProd_${(1+i)}`, `IDPlayerProd_${key}_${(1+i)}`, "ClassPlayerProd_each", )

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
        Table.AddElement("div", `masterID`, "IDTable", "ClassTable", "",()=>{},)
        const ImgTable = new AddElement 
        ImgTable.AddElement("img", `IDTable`, "IDImgTable", "ClassImgTable", "O Jogo",()=>{},"Img/O jogo2.png")
    }
}
