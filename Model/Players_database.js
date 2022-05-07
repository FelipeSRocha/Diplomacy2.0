class Player_db{
    constructor(){
        this.MaxPlayers = 4
        this.MinPlayers = 2
        this.AmountofPlayers = 0
        this.Players = []

        this.SetPlayers()
    }   

    AddPlayer(){
        console.log(this.AmountofPlayer, this.MaxPlayers)
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
        this.AmountofPlayers = 4
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

    VerifySelectedPlayers(position){

        let test =[]
        this.Players.forEach((value, index)=>{
            test[index] = value.selected
        })

        if (test.includes(true) == false){
            this.Players[position].SelectPlayer()
            
        }else if(test.indexOf(true) == position){
            this.Players[position].SelectPlayer()
        }else{
            alert("Selecione apenas 1 jogador")
        }
    }
}