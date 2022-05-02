class Game{
    constructor(){
        this.PlayerDB = new Player_db()
        this.Round = -1
    }

    NextRound(){
        let UpdatePlayer = Diplomacy.PlayerDB.Players
        UpdatePlayer.forEach((el, index) =>{
            Diplomacy.PlayerDB.Players[index].ModifyValue('Energia',el['ProdEnergia'])
            Diplomacy.PlayerDB.Players[index].ModifyValue('Comida',el['ProdComida'])
            Diplomacy.PlayerDB.Players[index].ModifyValue('Exercito',el['ProdExercito'])
            Diplomacy.PlayerDB.Players[index].ModifyValue('Tecnologia',el['ProdTecnologia'])
        })  
        
        this.CheckRound()
        this.Round++
        Render.RenderPlayers()
        Render.RenderFooter()
    }

    ResetGame(){
        Reset()
    }

    CheckRound(){
        let Quarter = (this.Round%4)+1
        let year = parseInt(this.Round/4)
        let fase = [this.Round+1,Quarter,year]
        return fase
    }
    
}