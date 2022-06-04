class Player{
    constructor(){
        this.ProdEnergia = 0
        this.ProdComida = 0
        this.ProdExercito = 0
        this.ProdTecnologia = 0
        this.Energia = 0
        this.Comida = 0
        this.Exercito = 0
        this.Tecnologia = 0
        this.selected = false
        this.PlayerInfluence = []
    }

    SelectPlayer(){
        this.selected = !this.selected
        VIEW.RenderStartScreen()
    }

    ModifyValue(attribute, amount){
        this[attribute] += amount
        if (this[attribute]<0){
            this[attribute]=0
        }else if(this[attribute]>25){
            this[attribute]=25
        }
        VIEW.RenderPlayers()
    }
    UpdateValue(attribute, amount){
        this[attribute] += amount
        if (this[attribute]<0){
            this[attribute]=0
        }else if(this[attribute]>25){
            this[attribute]=25
        }
    }
}