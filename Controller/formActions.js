function criarSala(){
  const game = getDatafromform()
  if (game){
    const url = `http://localhost:3000/enter?room=${game.room}&player=${game.player}&password=${game.password}&isHost=true`
    const options = {
        method: 'GET',
        }
    
    fetch(url,options)
    .then(response=>response.json())
    .then(data=>{
      if(data){
        // alert("Sala criada com sucesso!")
        deleteForm()
        const realtime = connectStream()
        newGame(game, realtime)
      }else{
        alert("Esse nome de sala já existe!")
      }
    }
    )
  }
}
function entrarSala(){
  const game = getDatafromform()
  const url = `http://localhost:3000/gameroom?room=${game.room}&password=${game.password}&isHost=false`
  const options = {

      method: 'GET',
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
        deleteForm()
        newGame(game.room)
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
function deleteForm(){
  const inhtml = new InHTML()
  inhtml.DeleteIfExist("#form")
}
function connectStream(){
  console.log(`Conectando com stream`)

  const realtime = new Ably.Realtime({
    authUrl: "/auth",
  });
  console.log("Cliente conectado com stream")
  return realtime
}