class DataBase{
    constructor(){
        this.countries = {'Siberia': {"Energia": 0, "Comida": 2, "Exercito": 0, "Tecnologia": 0, "Nome":"Sibéria", "Players":[false,false,false,false]}, 
        'Inglaterra': {"Energia": 0, "Comida": 0, "Exercito": 1, "Tecnologia": 1, "Nome":"Inglaterra", "Players":[false,false,false,false]}, 
        'Tchita': {"Energia": 0, "Comida": 0, "Exercito": 1, "Tecnologia": 0, "Nome":"Tchita", "Players":[false,false,false,false]}, 
        'Dudinka': {"Energia": 0, "Comida": 0, "Exercito": 1, "Tecnologia": 0, "Nome":"Dudinka", "Players":[false,false,false,false]},
        'Omsk': {"Energia": 0, "Comida": 0, "Exercito": 1, "Tecnologia": 0, "Nome":"Omsk", "Players":[false,false,false,false]},
        'Alemanha': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 1, "Nome":"Alemanha", "Players":[false,false,false,false]},
        'Vladvostok': {"Energia": 0, "Comida": 0, "Exercito": 2, "Tecnologia": 0, "Nome":"Vladvostok", "Players":[false,false,false,false]},
        'Moscou': {"Energia": 1, "Comida": 0, "Exercito": 1, "Tecnologia": 0, "Nome":"Moscou", "Players":[false,false,false,false]},
        'Mongolia': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 0, "Nome":"Mongolia", "Players":[false,false,false,false]},
        'Aral': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 0, "Nome":"Aral", "Players":[false,false,false,false]},
        'Polonia': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 0, "Nome":"Polônia", "Players":[false,false,false,false]},
        'Japao': {"Energia": 0, "Comida": 0, "Exercito": 0, "Tecnologia": 2, "Nome":"Japão", "Players":[false,false,false,false]},
        'China': {"Energia": 1, "Comida": 0, "Exercito": 1, "Tecnologia": 1, "Nome":"China", "Players":[false,false,false,false]},
        'Orientemedio': {"Energia": 1, "Comida": 0, "Exercito": 1, "Tecnologia": 0, "Nome":"Oriente Médio", "Players":[false,false,false,false]},
        'Vietnam': {"Energia": 0, "Comida": 2, "Exercito": 0, "Tecnologia": 0, "Nome":"Vietnam", "Players":[false,false,false,false]},
        'Venezuela': {"Energia": 1, "Comida": 0, "Exercito": 1, "Tecnologia": 0, "Nome":"Venezuela", "Players":[false,false,false,false]},
        'Borneu': {"Energia": 1, "Comida": 1, "Exercito": 0, "Tecnologia": 0, "Nome":"Bornéu", "Players":[false,false,false,false]},
        'Guine': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 0, "Nome":"Nova Guiné", "Players":[false,false,false,false]},
        'Brasil': {"Energia": 1, "Comida": 2, "Exercito": 0, "Tecnologia": 0, "Nome":"Brasil", "Players":[false,false,false,false]},
        'Argentina': {"Energia": 0, "Comida": 2, "Exercito": 0, "Tecnologia": 0, "Nome":"Argentina", "Players":[false,false,false,false]},
        'Australia': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 1, "Nome":"Austrália", "Players":[false,false,false,false]},
        'India': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 1, "Nome":"Índia", "Players":[false,false,false,false]},
        'Sumatra': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 0, "Nome":"Sumatra", "Players":[false,false,false,false]},
        'Islandia': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 0, "Nome":"Islândia", "Players":[false,false,false,false]},
        'Groelandia': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 0, "Nome":"Groelândia", "Players":[false,false,false,false]},
        'Suecia': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 1, "Nome":"Suécia", "Players":[false,false,false,false]},
        'Jamaica': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 0, "Nome":"Jamaica", "Players":[false,false,false,false]},
        'Sudao': {"Energia": 0, "Comida": 1, "Exercito": 1, "Tecnologia": 0, "Nome":"Sudão", "Players":[false,false,false,false]},
        'Egito': {"Energia": 0, "Comida": 0, "Exercito": 1, "Tecnologia": 0, "Nome":"Egito", "Players":[false,false,false,false]},
        'Argelia': {"Energia": 1, "Comida": 0, "Exercito": 1, "Tecnologia": 0, "Nome":"Argélia", "Players":[false,false,false,false]},
        'Franca': {"Energia": 1, "Comida": 0, "Exercito": 1, "Tecnologia": 0, "Nome":"França", "Players":[false,false,false,false]},
        'Mackenzie': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 0, "Nome":"Mackenzie", "Players":[false,false,false,false]},
        'Labrador': {"Energia": 0, "Comida": 2, "Exercito": 0, "Tecnologia": 0, "Nome":"Labrador", "Players":[false,false,false,false]},
        'Novayork': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 1, "Nome":"Nova York", "Players":[false,false,false,false]},
        'California': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 2, "Nome":"Califórnia", "Players":[false,false,false,false]},
        'Ottawa': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 0, "Nome":"Ottawa", "Players":[false,false,false,false]},
        'Vancouver': {"Energia": 0, "Comida": 0, "Exercito": 0, "Tecnologia": 1, "Nome":"Vancouver", "Players":[false,false,false,false]},
        'Alaska': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 0, "Nome":"Alaska", "Players":[false,false,false,false]},
        'Mexico': {"Energia": 2, "Comida": 0, "Exercito": 0, "Tecnologia": 0, "Nome":"México", "Players":[false,false,false,false]},
        'Congo': {"Energia": 0, "Comida": 1, "Exercito": 1, "Tecnologia": 0, "Nome":"Congo", "Players":[false,false,false,false]},
        'AfricaS': {"Energia": 2, "Comida": 0, "Exercito": 1, "Tecnologia": 0, "Nome":"Africa do Sul", "Players":[false,false,false,false]},
        'Madagascar': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 0, "Nome":"Madagascar", "Players":[false,false,false,false]},
        'Chile': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 0, "Nome":"Chile", "Players":[false,false,false,false]}
        }
        console.log("teste")
        this.AmountofPlayers = 3
        this.MaxPlayers = 4
        this.MinPlayers = 2
        this.Players = []
        this.PlayersNames=["Player1","Player2","Player3","Player4"]
        this.SetPlayers()
    }
    UpdatePlayersInfluency(NameofCountry,influencyplayers){
        this.countries[NameofCountry].Players = influencyplayers

        for(let i= 0;i<4;i++){
            let newPlayerValue = new Player
            Object.keys(this.countries).forEach(element=>{
                let prod = this.countries[element]
                let influency = this.countries[element].Players[i]
                if(influency == true){
                    newPlayerValue.ProdEnergia += prod.Energia
                    newPlayerValue.ProdComida += prod.Comida
                    newPlayerValue.ProdExercito += prod.Exercito
                    newPlayerValue.ProdTecnologia += prod.Tecnologia
                }
            })
           
            this.Players[i] = newPlayerValue
        }
        console.log(this.Players)
    }
    AddPlayer(){
        if (this.AmountofPlayers == this.MaxPlayers){
            alert("Máximo de 4 jogadores")
        }else{
            let NewPlayer = new Player()
            this.Players[this.Players.length] = NewPlayer
            this.AmountofPlayers++
            Render.ReloadTable()
        }
    }
    RemovePlayer(){
        if (this.AmountofPlayers == this.MinPlayers){
            alert("Mínimo de 2 jogadores")
        }else{
            this.Players.pop()
            this.AmountofPlayers-- 
            Render.ReloadTable()
        }
    }
    SetPlayers(){
        // this.AmountofPlayers = parseInt(window.prompt("Quantos Jogadores? (Mín = 2, Máx = 4)","2"))
        if(isNaN(this.AmountofPlayers)){
            alert("Insira um número entre 2 e 4")
            this.SetPlayers()
        }
        if (this.AmountofPlayers > this.MaxPlayers){
            alert("Máximo de 4 jogadores")
            this.SetPlayers()
        }else if(this.AmountofPlayers < this.MinPlayers){
            alert("Mínimo de 2 jogadores")
            this.SetPlayers()
        }
        for (let i = 0; i < this.AmountofPlayers; i++){
            this.Players[i] = new Player()
        }
    }
}

