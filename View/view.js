class View{
    constructor(){
        this.TitleSpace = document.getElementById("TitleSpace")
        this.PlayersSection = document.getElementById("PlayersSection")
        this.ListofPlayers = Diplomacy.PlayerDB.Players
    }
    RenderStartScreen(){
        this.RenderTitle()

        this.RenderPlayerSection()
        this.RenderTableSection()
    }

    RenderTitle(){
        if(document.querySelectorAll(".Game_Title")){
            this.TitleSpace.innerText = ''
        }
        if(document.querySelectorAll(".Players_btn")){
            this.TitleSpace.innerText = ''
        }

        let PlayersSectiontitle = new AddElement
        PlayersSectiontitle.AddElement("h1", `TitleSpace`, "Game_Title", "", "Diplomacy", ()=>{})

        //Adiciona os botões Iniciais
        const btn_ResetGame = new AddElement
        btn_ResetGame.AddElement("button", `TitleSpace`, "btn_ResetGame", "Players_btn", "Reset Game",()=>{Diplomacy.ResetGame()})

        const btn_RemovePlayer = new AddElement
        btn_RemovePlayer.AddElement("button", `TitleSpace`, "Btn_RemovePlayer", "Players_btn", 'Remove Player', () => {Diplomacy.PlayerDB.RemovePlayer()})

        const btn_AddPlayer = new AddElement
        btn_AddPlayer.AddElement("button",`TitleSpace`, "Btn_AddPlayer","Players_btn", 'Add Player',() => {Diplomacy.PlayerDB.AddPlayer()})
        
        const btn_NextRound = new AddElement
        btn_NextRound.AddElement("button", `TitleSpace`, "btn_NextRound", "Players_btn", "Next Round",()=>{Diplomacy.NextRound()})

    }

    RenderPlayerSection(){
        if(document.querySelectorAll(".PlayerDiv")){
            this.PlayersSection.innerText = ''
        }

        //Itera pela lista de jogares para renderizar a interface de cada um
        this.ListofPlayers.forEach((el, i) =>{
            let select = "Select Player"

            //Cria os elementos da interface do jogador
            let PlayerDiv = new AddElement
            PlayerDiv.AddElement("div","PlayersSection", "PlayerDiv_" + (1+i),"PlayerDiv","",()=>{})

            let Playertitle = new AddElement
            Playertitle.AddElement("h2", "PlayerDiv_" + (1+i), "PlayerTitle_" + (1+i),"PlayerTitle","Player " + (1+i),()=>{})

            let PlayerProdDiv = new AddElement
            PlayerProdDiv.AddElement("div","PlayerDiv_" + (1+i), "PlayerProd_" + (1+i),"PlayerProd","Produção",()=>{})

            let PlayerProdBank = new AddElement
            PlayerProdBank.AddElement("div","PlayerDiv_" + (1+i),"PlayerBank_" + (1+i),"PlayerBank","Banco",()=>{})

            //Itera pelos stats dos jogadores
            Object.keys(el).forEach(key =>{
                let text = ""
                switch(key){

                    //Renderiza a parte de produção do jogador
                    case "ProdEnergia":
                    case "ProdComida":
                    case "ProdExercito":
                    case "ProdTecnologia":
                        let ProdDiv = new AddElement
                        ProdDiv.AddElement("div","PlayerProd_" + (1+i), `PlayerProd_${key}_${(1+i)}`, "PlayerProd_each")

                        let img_Prod = new AddElement
                        let src_prod = `/Img/${key}.png`
                        img_Prod.AddElement("img",`PlayerProd_${key}_${(1+i)}`, `img_${key}_${(1+i)}`, "img_resources","",() =>{}, src_prod)

                        let RightDivProd = new AddElement
                        RightDivProd.AddElement("div",`PlayerProd_${key}_${(1+i)}`, `RightDivProd_${key}_${(1+i)}`, "RightDivProd", text,()=>{})

                        let PlayerProd = new AddElement
                        text = `+ ${el[key]}`
                        PlayerProd.AddElement("p",`RightDivProd_${key}_${(1+i)}`, "", "ResourcesText", text,()=>{})

                        let btn_decrease_prod = new AddElement
                        btn_decrease_prod.AddElement("button", `RightDivProd_${key}_${(1+i)}`, "", "Players_btn_resources_Dec", "-1",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,-1)})
                        let btn_increase_prod = new AddElement
                        btn_increase_prod.AddElement("button", `RightDivProd_${key}_${(1+i)}`, "", "Players_btn_resources_Inc", "+1",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,1)})


                        break

                    //Renderiza a parte do banco do jogador
                    case "Energia":
                    case "Comida":
                    case "Exercito":
                    case "Tecnologia":
                        let BankDiv = new AddElement
                        BankDiv.AddElement("div","PlayerBank_" + (1+i), `PlayerBank_${key}_${(1+i)}`, "PlayerBank_each")

                        let img_Bank = new AddElement
                        let src_Bank = `/Img/${key}.png`
                        img_Bank.AddElement("img",`PlayerBank_${key}_${(1+i)}`, `img_${key}_${(1+i)}`, "img_resources","",() =>{}, src_Bank)

                        let RightDivBank = new AddElement
                        RightDivBank.AddElement("div",`PlayerBank_${key}_${(1+i)}`, `RightDivBank_${key}_${(1+i)}`, "RightDivBank", text,()=>{})

                        let PlayerBank = new AddElement
                        text = `+ ${el[key]}`
                        PlayerBank.AddElement("p",`RightDivBank_${key}_${(1+i)}`, "", "ResourcesText", text,()=>{})

                        let btn_decrease5_bank = new AddElement
                        btn_decrease5_bank.AddElement("button", `RightDivBank_${key}_${(1+i)}`, "menos5", "Players_btn_resourcesBank_Dec", "-5",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,-5)})
                        let btn_decrease_bank = new AddElement
                        btn_decrease_bank.AddElement("button", `RightDivBank_${key}_${(1+i)}`, "menos1", "Players_btn_resourcesBank_Dec", "-1",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,-1)})
                        let btn_increase_bank = new AddElement
                        btn_increase_bank.AddElement("button", `RightDivBank_${key}_${(1+i)}`, "mais1", "Players_btn_resourcesBank_Inc", "+1",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,1)})
                        let btn_increase5_bank = new AddElement
                        btn_increase5_bank.AddElement("button", `RightDivBank_${key}_${(1+i)}`, "mais5", "Players_btn_resourcesBank_Inc", "+5",()=>{Diplomacy.PlayerDB.Players[i].ModifyValue(key,5)})

                        break
                    
                    //Renderiza o jogador selecionado
                    case "selected":
                        if (el[key]){
                            let selected = document.getElementById("PlayerDiv_" + (1+i))
                            selected.style.backgroundColor = "green"
                            select = 'Diselect Player'
                        }
                        break
                }

            })
            
            // let btn_SelectPlayer = new AddElement
            // btn_SelectPlayer.AddElement("button", `PlayerTitle_${i+1}`, `Btn_SelectPlayer_${i+1}`, "Players_btn", select, () => {Diplomacy.PlayerDB.VerifySelectedPlayers(i)})
        })

    }

    RenderTableSection(){
        const Table = new AddElement
        Table.AddElement("div", `PlayersSection`, "Game1", "GameDiv", "O Jogo",()=>{})
    }
}
