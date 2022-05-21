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
        alert("Sala criada com sucesso!")
      }else{
        alert("Esse nome de sala já existe!")
      }
    })
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
        alert("Entrando na sala!")
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
  if (nick =="" || room == ""|| password ==""){
    alert("Preencha todos os campos")
    return false
  }
  const game = {room: room,
    player: nick ,
    password: password ,
    }
  return game
}
//   const request = new XMLHttpRequest()
//   request.open("POST",`http://localhost:3000/games`)
//   request.setRequestHeader("token", "AAAAAAAAAAAAAAAAAAAAAAAAAAA")
//   request.setRequestHeader("Content-Type", "application/json")
//   try {
//       request.send(JSON.stringify(game))
//       request.onreadystatechange = ()=>{
//           if(request.readyState == 4){
//               const a = request.responseText
//               console.log(`Resposta: ${request.response}`)
//           }
//       }
//   } catch (error) {
//       if(error){

//       }
//   }

