class Game{
    constructor(){
        this.Round = -1
    }

    NextRound(){
        let UpdatePlayer = DataFounder.Players
        UpdatePlayer.forEach((el, index) =>{
            DataFounder.Players[index].ModifyValue('Energia',el['ProdEnergia'])
            DataFounder.Players[index].ModifyValue('Comida',el['ProdComida'])
            DataFounder.Players[index].ModifyValue('Exercito',el['ProdExercito'])
            DataFounder.Players[index].ModifyValue('Tecnologia',el['ProdTecnologia'])
        })  
        
        this.CheckRound()
        this.Round++
        Render.ReloadTable()
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