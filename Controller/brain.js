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
        this.players = 
        {0:{
            stats: {name: "eu", color: "Yellow"},
            prod:{Energia: 0,Comida: 0,Exercito: 0,Tecnologia:0},
            bank:{Energia: 0,Comida: 0,Exercito: 0,Tecnologia:0},  
            territories:[]
            },
        1:{
            stats: {name: "voce", color: "Red" },
            prod:{Energia: 0,Comida: 0,Exercito: 0,Tecnologia:0},
            bank:{Energia: 0,Comida: 0,Exercito: 0,Tecnologia:0},  
            territories:[]          
            },
        2:{
            stats: {name: "tu", color: "Green"},
            prod:{Energia: 0,Comida: 0,Exercito: 0,Tecnologia:0},
            bank:{Energia: 0,Comida: 0,Exercito: 0,Tecnologia:0}, 
            territories:[]           
            },
        3:{
            stats: {name: "nos", color: "Cyan"},
            prod:{Energia: 0,Comida: 0,Exercito: 0,Tecnologia:0},
            bank:{Energia: 0,Comida: 0,Exercito: 0,Tecnologia:0},   
            territories:[]         
            },
        }  
        this.Events ={
        1:{nome:"Embargo Econômico",efeito:"O jogador com maior produção de tecnologia escolhe um jogador para que não possa comprar passagens, criar alianças e negociar recursos durante o ano.",f:()=>{}},
        2:{nome:"Avanço Militar", efeito:"O jogador com maior exército retira o domínio de um território de outro jogador.",f:()=>{}},
        3:{nome:"Sobrecarga", efeito:"O jogador com maior produção energética descarta seus tokens de energia e perde sua produção de energia durante o ano.",f:()=>{

        }},
        4:{nome:"Represália", efeito:"O jogador com maior produção energética retira o domínio de um território de outro jogador.",f:()=>{}},
        5:{nome:"Escassez de Comida", efeito:"Todos os jogadores menos o maior produtor de alimento não produzem mais comida durante o ano.",f:()=>{}},
        6:{nome:"Combate a Fome", efeito:"O jogador com a maior produção de alimento deve distribuir todo o seu estoque de alimento aos outros jogadores durante o ano (ele escolhe a quantidade e para quem).",f:()=>{}}
        }
        this.activeEvents = []
        this.AmountofPlayers = 4
        this.MaxPlayers = 4
        this.MinPlayers = 2
        this.Round = -1
    }

    ModifyValue(player,type, attribute, amount){
        let newValue = amount + this.players[player][type][attribute]
        if (newValue<0){
            newValue=0
        }else if(newValue>25){
            newValue=25
        }
        this.players[player][type][attribute] = newValue
        
        VIEW.ChangePlayerValue(player,type, attribute, newValue)
    }
    UpdateInfluency(NameofCountry){
        let influencyplayers = [false,false,false,false]
        for(let i=0;i<this.AmountofPlayers;i++){
          let test = document.getElementById(`checkbox_p${i}`).checked
          if(test==true){
            influencyplayers[i]=true
          }
        }
        console.log(influencyplayers)
        this.countries[NameofCountry].Players = influencyplayers
        this.UpdatePlayersProduction()
        this.UpdateAllProduction()
    }
    UpdatePlayersProduction(){
        for(let pN = 0; pN < this.AmountofPlayers; pN++){
            let prod = {Energia: 0,Comida: 0,Exercito: 0,Tecnologia:0}
            Object.keys(this.countries).forEach(country =>{
                const value = this.countries[country].Players[pN]
                let circle = document.getElementById(`${country}_2`).children[2].children[pN]
                if (value){
                    prod.Energia += this.countries[country].Energia
                    prod.Comida += this.countries[country].Comida
                    prod.Exercito += this.countries[country].Exercito
                    prod.Tecnologia += this.countries[country].Tecnologia

                    circle.style.fill = this.players[pN].stats.color
                    circle.style['stroke-opacity'] = "1";
                    circle.style['stroke-width'] = "2";
                }else{
                    circle.style.fill = "none"
                    circle.style.stroke = "black";
                    circle.style['stroke-opacity'] = "0.12";
                    circle.style['stroke-width'] = "1";
                    console.log()
                }
            })
            this.players[pN].prod = prod
        }
    }
    UpdateAllProduction(){
        Object.keys(DB.players).forEach(pN =>{
            console.log(pN)
            Object.keys(DB.players[pN].prod).forEach(key =>{
                VIEW.ChangePlayerValue(pN,"prod",key,DB.players[pN].prod[key])
            })
        })  
    }
    NextRound(){
        Object.keys(DB.players).forEach(pN =>{
            Object.keys(DB.players[pN].prod).forEach(key =>{
                this.ModifyValue(pN,"bank",key,DB.players[pN].prod[key])
            })
        })  
        this.Round++
        const round = this.CheckRound()
    }
    CheckRound(){
        let Quarter = (this.Round%4)+1
        let year = parseInt(this.Round/4)
        let fase = {"Round": this.Round+1, "Quarter":Quarter,"Year":year}
        if (fase.Quarter==1){
            this.Events ={
                1:{nome:"Embargo Econômico",efeito:"O jogador com maior produção de tecnologia escolhe um jogador para que não possa comprar passagens, criar alianças e negociar recursos durante o ano."},
                2:{nome:"Avanço Militar", efeito:"O jogador com maior exército retira o domínio de um território de outro jogador."},
                3:{nome:"Sobrecarga", efeito:"O jogador com maior produção energética descarta seus tokens de energia e perde sua produção de energia durante o ano."},
                4:{nome:"Represália", efeito:"O jogador com maior produção energética retira o domínio de um território de outro jogador."},
                5:{nome:"Escassez de Comida", efeito:"Todos os jogadores menos o maior produtor de alimento não produzem mais comida durante o ano."},
                6:{nome:"Combate a Fome", efeito:"O jogador com a maior produção de alimento deve distribuir todo o seu estoque de alimento aos outros jogadores durante o ano (ele escolhe a quantidade e para quem)."}
                }
            this.activeEvents = []
        }
        if(fase.Round>1 && fase.Quarter ==1 || fase.Quarter == 3){
            console.log("Evento de Convenção!!")
            this.ConventionEvent(fase.Quarter)
        }

        return fase
    } 
    ConventionEvent(Quarter){
        console.log(this.Events)
        let keys = Object.keys(this.Events);

        const random = Math.floor(Math.random() * keys.length)

        if(Quarter==1){
            VIEW.DisplayEvent(this.Events[random].nome, this.Events[random].efeito)
        }else if(Quarter==3){
            VIEW.DisplaySecondEvent(this.Events[random].nome, this.Events[random].efeito)
        }
        this.CheckEvents(random)
        delete this.Events[random]
    }
    CheckEvents(evento){
        console.log(evento)
        switch(evento){
            case 3:

                break
            case 5:

                break
        }
    } 

}