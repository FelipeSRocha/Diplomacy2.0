class World{
    constructor(){
        this.countries = {'Siberia': {"Energia": 0, "Comida": 2, "Exercito": 0, "Tecnologia": 0}, 
        'Inglaterra': {"Energia": 0, "Comida": 0, "Exercito": 1, "Tecnologia": 1}, 
        'Tchita': {"Energia": 0, "Comida": 0, "Exercito": 1, "Tecnologia": 0}, 
        'Dudinka': {"Energia": 0, "Comida": 0, "Exercito": 1, "Tecnologia": 0},
        'Omsk': {"Energia": 0, "Comida": 0, "Exercito": 1, "Tecnologia": 0},
        'Alemanha': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 1},
        'Vladvostok': {"Energia": 0, "Comida": 0, "Exercito": 2, "Tecnologia": 0},
        'Moscou': {"Energia": 1, "Comida": 0, "Exercito": 1, "Tecnologia": 0},
        'Mongolia': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 0},
        'Aral': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 0},
        'Polonia': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 0},
        'Japao': {"Energia": 0, "Comida": 0, "Exercito": 0, "Tecnologia": 2},
        'China': {"Energia": 1, "Comida": 0, "Exercito": 1, "Tecnologia": 1},
        'OrienteMedio': {"Energia": 1, "Comida": 0, "Exercito": 1, "Tecnologia": 0},
        'Vietna': {"Energia": 0, "Comida": 2, "Exercito": 0, "Tecnologia": 0},
        'Venezuela': {"Energia": 1, "Comida": 0, "Exercito": 1, "Tecnologia": 0},
        'Borneu': {"Energia": 1, "Comida": 1, "Exercito": 0, "Tecnologia": 0},
        'Guine': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 0},
        'Brasil': {"Energia": 1, "Comida": 2, "Exercito": 0, "Tecnologia": 0},
        'Argentina': {"Energia": 0, "Comida": 2, "Exercito": 0, "Tecnologia": 0},
        'Australia': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 1},
        'India': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 1},
        'Sumatra': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 0},
        'Islandia': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 0},
        'Gronelandia': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 0},
        'Suecia': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 1},
        'Jamaica': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 0},
        'Sudao': {"Energia": 0, "Comida": 1, "Exercito": 1, "Tecnologia": 0},
        'Egito': {"Energia": 0, "Comida": 0, "Exercito": 1, "Tecnologia": 0},
        'Argelia': {"Energia": 1, "Comida": 0, "Exercito": 1, "Tecnologia": 0},
        'Franca': {"Energia": 1, "Comida": 0, "Exercito": 1, "Tecnologia": 0},
        'Mackenzie': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 0},
        'Labrador': {"Energia": 0, "Comida": 2, "Exercito": 0, "Tecnologia": 0},
        'Nova York': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 1},
        'California': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 2},
        'Ottawa': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 0},
        'Vancouver': {"Energia": 0, "Comida": 0, "Exercito": 0, "Tecnologia": 1},
        'Alaska': {"Energia": 1, "Comida": 0, "Exercito": 0, "Tecnologia": 0},
        'Mexico': {"Energia": 2, "Comida": 0, "Exercito": 0, "Tecnologia": 0},
        'Congo': {"Energia": 0, "Comida": 1, "Exercito": 1, "Tecnologia": 0},
        'AfricaS': {"Energia": 2, "Comida": 0, "Exercito": 1, "Tecnologia": 0},
        'Madagascar': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 0},
        'Chile': {"Energia": 0, "Comida": 1, "Exercito": 0, "Tecnologia": 0}
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
