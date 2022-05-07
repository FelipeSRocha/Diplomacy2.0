class World{
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

        this.type = ""
        this.father = ""
        this.Resources = {Energia: 0[0,0,0,0], Comida: 0[0,0,0,0], Exercito: 0, Tecnologia: 0}
        this.NumberOfContinents = 0
        this.ListOfContinents = 0
    }

    AddContinent(){

    }
    
    RemoveContinent(){

    }

    SetNumberofContinents(){

    }

}

class NewContinent{
    constructor(){
        this.name = ""
        this.BonusResource = ["", 0]
        this.NumberofCountries = 0
        this.ListOfCountries = []
    }

    AddContries(){

    }
    
    RemoveContries(){

    }

    SetNumberofContriess(){
        
    }
}

class NewCountry{
    constructor(){
        this.name
        this.ProdEnergia = 0
        this.ProdComida = 0
        this.ProdExercito = 0
        this.ProdTecnologia = 0
    }
}
