function criarSala(){
  const game = getDatafromform()
  if (game){
    const url = `http://localhost:3000/addServer`
    const options = {
  
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(game)
    }
    fetch(url,options)
    .then(response=>response.json())
    .then(data=>{
      if(data){
        // alert("Sala criada com sucesso!")
        deleteForm()
        newGame()
      }else{
        alert("Esse nome de sala já existe!")
      }
    }
    )
  }
}
function entrarSala(){
  const game = getDatafromform()
  const url = `http://localhost:3000/enterServer`
  const options = {

      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify(game)
  }
  fetch(url,options)
  .then(response=>response.json())
  .then(data=>{
    console.log(data)
    switch(data.resp){
      case "1":
        //Sala nao existe
        alert("Sala não existe!")
      break
      case "2":
        //senha incorreta
        alert("Senha Incorreta!")
      break
      case "3":
        //tudo ok
        // alert("Entrando na sala!")
        deleteForm()
      break
      case "4":
        //tudo ok
        alert("Sala Cheia!")
      break
    }
  })
}

function getDatafromform(){
  const nick = document.getElementById("nick").value
  const room = document.getElementById("room").value
  const password = document.getElementById("password").value
  // if (nick =="" || room == ""|| password ==""){
  //   alert("Preencha todos os campos")
  //   return false
  // }
  const game = {room: room,
    player: nick ,
    password: password ,
    }
  return game
}
function deleteForm(){
  const inhtml = new InHTML()
  inhtml.DeleteIfExist("#form")
}