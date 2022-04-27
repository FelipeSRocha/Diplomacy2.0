class Game{
    constructor(){
        this.PlayerDB = new Player_db()
    }

    NextRound(){
        let UpdatePlayer = Diplomacy.PlayerDB.Players
        UpdatePlayer.forEach((el, index) =>{
            Diplomacy.PlayerDB.Players[index].ModifyValue('Energia',el['ProdEnergia'])
            Diplomacy.PlayerDB.Players[index].ModifyValue('Comida',el['ProdComida'])
            Diplomacy.PlayerDB.Players[index].ModifyValue('Exercito',el['ProdExercito'])
            Diplomacy.PlayerDB.Players[index].ModifyValue('Tecnologia',el['ProdTecnologia'])
        })  

        Render.RenderStartScreen()
    }

    ResetGame(){
        Controller()
    }
}