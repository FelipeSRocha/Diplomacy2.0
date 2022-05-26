class Game{
    constructor(){
        this.Round = -1
        this.Events ={"Embargo Econômico":{"Efeito":"O jogador com maior produção de tecnologia escolhe um jogador para que não possa comprar passagens, criar alianças e negociar recursos durante o ano."},
        "Avanço Militar":{ "Efeito":"O jogador com maior exército retira o domínio de um território de outro jogador."},
        "Sobrecarga":{ "Efeito":"O jogador com maior produção energética descarta seus tokens de energia e perde sua produção de energia durante o ano."},
        "Represália":{ "Efeito":"O jogador com maior produção energética retira o domínio de um território de outro jogador."},
        "Escassez de Comida":{ "Efeito":"Todos os jogadores menos o maior produtor de alimento não produzem mais comida durante o ano."},
        "Combate a Fome":{ "Efeito":"O jogador com a maior produção de alimento deve distribuir todo o seu estoque de alimento aos outros jogadores durante o ano (ele escolhe a quantidade e para quem)."}
        }
    }



    ResetGame(){
        Reset()
        
    }

    CheckRound(){
        let Quarter = (this.Round%4)+1
        let year = parseInt(this.Round/4)
        let fase = {"Round": this.Round+1, "Quarter":Quarter,"Year":year}
        if (fase.Quarter==1){
            this.Events ={"Embargo Econômico":{"Efeito":"O jogador com maior produção de tecnologia escolhe um jogador para que não possa comprar passagens, criar alianças e negociar recursos durante o ano."},
            "Avanço Militar":{ "Efeito":"O jogador com maior exército retira o domínio de um território de outro jogador."},
            "Sobrecarga":{ "Efeito":"O jogador com maior produção energética descarta seus tokens de energia e perde sua produção de energia durante o ano."},
            "Represália":{ "Efeito":"O jogador com maior produção energética retira o domínio de um território de outro jogador."},
            "Escassez de Comida":{ "Efeito":"Todos os jogadores menos o maior produtor de alimento não produzem mais comida durante o ano."},
            "Combate a Fome":{ "Efeito":"O jogador com a maior produção de alimento deve distribuir todo o seu estoque de alimento aos outros jogadores durante o ano (ele escolhe a quantidade e para quem)."}
            }
        }
        if(fase.Round>1 && fase.Quarter ==1 || fase.Quarter == 3){
            console.log("Evento de Convenção!!")

            this.ConventionEvent(fase.Quarter)
        }

        return fase
    }  
    ConventionEvent(Quarter){
        console.log(Quarter)
        let keys = Object.keys(this.Events);

        const random = Math.floor(Math.random() * keys.length)
        let event = keys[random]

        if(Quarter==1){

            VIEW.DisplayEvent(event, this.Events[event].Efeito)
        }else if(Quarter==3){
            VIEW.DisplaySecondEvent(event, this.Events[event].Efeito)
        }

        delete this.Events[event]
    }
    generateRandom(min = 1, max = 7) {

        // find diff
        let difference = max - min;
    
        // generate random number 
        let rand = Math.random();
    
        // multiply with difference 
        rand = Math.floor( rand * difference);
    
        // add with min value 
        rand = rand + min;
    
        return rand;
    }
    
}