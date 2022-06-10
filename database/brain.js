class Brain{
    constructor(name, clientId){
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
        'Guine': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 0, "Nome":"Nova Guiné", "Players":[false,false,false,false]},
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
        this.objinfluency = ["Influence at least 12 territories",
        "Be the most influence player",
        "Influecy countries in every continent",
        "Reach the majoraty influence in two continents",
        "Reach more than half of territories"
        ]
        this.objprod = ["Reach at least 10 in energy production",
        "Reach the biggest tecnology productor",
        "Reach at least 9 in food production",
        "Reach at least 6 in energy, food and tecnology production"
        ]
        this.objleader = [["authoritarian","Own the bigger army production"],
        ["Cautious","Have neither the smallest army production nor the greatest"],
        ["Democratic","Have at least 6  shared influence territories"],
        ["Pacifist", "Be the player with the lowest army production"]
        ]
        this.AmountofPlayers = 1
        this.activePlayers = [false,false,false,false]
        this.players = {}
        this.createPlayer(name, clientId)
        this.Events = this.ResetEvents()
        this.MaxPlayers = 4
        this.MinPlayers = 2
        this.Round = -1
    }
    createPlayer(name, clientId){
        for (let i = 0; i <= this.AmountofPlayers; i++){
            let color
            switch (i){
                case 0:
                    color = "Yellow"
                    break
                case 1:
                    color = "#43fb00"
                    break
                case 2:
                    color = "Red"
                    break
                case 3:
                    color = "Cyan"
                    break
            }

            //check for the first seat available
            if (!this.activePlayers[i]){
                const randominf = Math.floor(Math.random() * this.objinfluency.length)
                const objinfluency = this.objinfluency[randominf]
                this.objinfluency.splice(randominf,1)
    
                const randomprod = Math.floor(Math.random() * this.objprod.length)
                const objprod = this.objprod[randomprod]
                this.objprod.splice(randomprod,1)
    
                const randomleader = Math.floor(Math.random() * this.objleader.length)
                const objleader = this.objleader[randomleader]
                this.objleader.splice(randomleader,1)

                this.players[clientId] = {
                    stats: {name: name, color: color, position: i},
                    prod: {Energia: 0,Comida: 0,Exercito: 0,Tecnologia:0},
                    bank: {Energia: 0,Comida: 0,Exercito: 0,Tecnologia:0},  
                    territories:[],
                    objective:[objinfluency, objprod, objleader]
                    }
                this.activePlayers[i] = true
                this.updateAmountofPlayers()
                break
            }
        }
    }
    updateAmountofPlayers(){
        this.AmountofPlayers = Object.keys(this.players).length
    }
    ResetEvents(){
        //reseta aos eventos padroes de inicio de ano
        const events ={
            0:{nome:"Embargo Econômico",efeito:"O jogador com maior produção de tecnologia escolhe um jogador para que não possa comprar passagens, criar alianças e negociar recursos durante o ano."},
            1:{nome:"Avanço Militar", efeito:"O jogador com maior exército retira o domínio de um território de outro jogador."},
            2:{nome:"Sobrecarga", efeito:"O jogador com maior produção energética descarta seus tokens de energia e perde sua produção de energia durante o ano.",},
            3:{nome:"Represália", efeito:"O jogador com maior produção energética retira o domínio de um território de outro jogador."},
            4:{nome:"Escassez de Comida", efeito:"Todos os jogadores menos o maior produtor de alimento não produzem mais comida durante o ano."},
            5:{nome:"Combate a Fome", efeito:"O jogador com a maior produção de alimento deve distribuir todo o seu estoque de alimento aos outros jogadores durante o ano (ele escolhe a quantidade e para quem)."},
            lista:[0,1,2,3,4,5],
            activeEvents:[],
        }
        return events
    }
    ModifyValue(params){
        const player = params[0]
        const type = params[1]
        const attribute = params[2]
        const amount = params[3]
        //adiciona um valor no banco ou producao de um player
        let newValue = amount + this.players[player][type][attribute]
        if (newValue<0){
            newValue=0
        }else if(newValue>25){
            newValue=25
        }
        this.players[player][type][attribute] = newValue
    }
    UpdateInfluency([NameofCountry, influencyplayers]){
        //adiciona o pais selecionado na producao dos jogadores

        this.countries[NameofCountry].Players = influencyplayers
        this.UpdatePlayersProduction()
    }
    NextRound(){
        //realiza todas as verificacoes para avancar o round
        this.Round++

        this.UpdatePlayersProduction()

        const fase = this.GenerateFase()

        this.ExecuteEvents()

        this.ProducetoBank()

    }
    GenerateFase(){
        //calcula proxima fase e verifica eventos
        let Quarter = (this.Round%4)+1
        let year = parseInt(this.Round/4)
        let fase = {"Round": this.Round+1, "Quarter":Quarter,"Year":year}
        if (fase.Quarter==1){
            this.Events = this.ResetEvents()
            this.ResetBank()
        }
        if(fase.Round>1 && fase.Quarter ==1 || fase.Quarter == 3){
            console.log("Evento de Convenção!!")
            this.PickEvent(fase.Quarter)
        }

        return fase
    } 
    UpdatePlayersProduction(){
        //Itera sobre os paises e atualiza a producao de todos os jogadores
        Object.keys(this.players).forEach(id=>{
            const pN = this.players[id].stats.position
            let prod = {Energia: 0,Comida: 0,Exercito: 0,Tecnologia:0}
            Object.keys(this.countries).forEach(country =>{
                const value = this.countries[country].Players[pN]
                if (value){
                    prod.Energia += this.countries[country].Energia
                    prod.Comida += this.countries[country].Comida
                    prod.Exercito += this.countries[country].Exercito
                    prod.Tecnologia += this.countries[country].Tecnologia

                    const index = this.players[id].territories.indexOf(country)
                    if (index == -1) {
                        this.players[id].territories.push(country) 
                    }
                }else{
                    const index = this.players[id].territories.indexOf(country)
                    if (index > -1) {
                        this.players[id].territories.splice(index, 1); 
                    }
                }
            })
            this.players[id].prod = prod
        })

    }
    ExecuteEvents(){
        this.Events.activeEvents.forEach(key=>{
            const targetPlayer = key[1]
            switch(key[0]){
                case 2:
                    //O jogador com maior produção energética descarta seus tokens de energia e perde sua produção de energia durante o ano.
                    targetPlayer.forEach(pN=>{
                        this.players[pN].prod.Energia = 0
                        this.players[pN].bank.Energia = 0
                    })
                    break
                case 4:
                    //Todos os jogadores menos o maior produtor de alimento não produzem mais comida durante o ano
                    Object.keys(this.players).forEach(id=>{
                        const verify = targetPlayer.indexOf(id)
                        if (verify == -1){
                            this.players[id].prod.Comida = 0
                        }
                    })
                    break
            }
        })
        // this.UpdateProdorBank("prod")
    } 
    ProducetoBank(){
        Object.keys(this.players).forEach(pN =>{
            Object.keys(this.players[pN].prod).forEach(attribute =>{
                const add = this.players[pN].prod[attribute]
                const bank = this.players[pN].bank[attribute]
                let newValue = add + bank
                if (newValue<0){
                    newValue=0
                }else if(newValue>25){
                    newValue=25
                }
                this.players[pN].bank[attribute] = newValue
            })
        })  
        //adiciona um valor no banco ou producao de um player
    }
    ResetBank(){
        Object.keys(this.players).forEach(pN =>{
            Object.keys(this.players[pN].prod).forEach(attribute =>{
                this.players[pN].bank[attribute] = 0
            })
        })  
        //adiciona um valor no banco ou producao de um player
    }
    PickEvent(Quarter){
        //adiciona eventos ativos
        const random = Math.floor(Math.random() * this.Events.lista.length)
        const number = this.Events.lista[random]

        this.Events.lista.splice(random,1)
        const target = this.SelectTargetPlayer(number)
        this.Events.activeEvents.push([number,target])

    }
    SelectTargetPlayer(key){
        let targetPlayer = [-1]
        switch(key){
            case 2:
                //O jogador com maior produção energética descarta seus tokens de energia e perde sua produção de energia durante o ano.
                targetPlayer = this.findBiggestProd("Energia")
                break
            case 4:
                //Todos os jogadores menos o maior produtor de alimento não produzem mais comida durante o ano
                targetPlayer = this.findBiggestProd("Comida")
                break
        }
        return targetPlayer
    }
    findBiggestProd(attribute){
        //acha o jogador com a maior producao de determinado atributo
        let targetPlayer
        let listofTargets
        Object.keys(this.players).forEach(id=>{
            if (this.players[id].stats.position == 0){
                targetPlayer = Object.keys(this.players)[0]
                listofTargets = [targetPlayer]
            } else {
                let verif = this.players[id].prod[attribute]
                let target = this.players[targetPlayer].prod[attribute]
                if (verif > target){    
                    listofTargets = [id]
                    targetPlayer = id
                } else if (verif == target){
                    listofTargets.push(id)
                }
            }
        })
        return listofTargets
    }

}
module.exports = Brain