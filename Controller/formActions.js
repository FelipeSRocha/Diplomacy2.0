let nickname = "";
let roomCode = "";
let globalChannel;
let initChannel;
let myClientId;
let myChannel;
let myChannelName;
let gameOn = false;
let players = {};
let totalPlayers = 0;
let game;
let myGameRoomName;
let myGameRoomCh;
let myNickname = localStorage.getItem("nickname");
let myGameRoomCode = localStorage.getItem("roomCode");
let amIHost = localStorage.getItem("isHost");

// function criarSala(){
//   const game = getDatafromform()
//   if (game){
//     const url = `http://localhost:3000/enter?room=${game.room}&player=${game.player}&password=${game.password}&isHost=true`
//     const options = {
//         method: 'GET',
//         }

//     fetch(url,options)
//     .then(response=>response.json())
//     .then(data=>{
//       if(data){
//         // alert("Sala criada com sucesso!")
//         deleteForm()
//         const realtime = connectStream()
//         enterGame(game, realtime)
//       }else{
//         alert("Esse nome de sala já existe!")
//       }
//     }
//     )
//   }
// }
// function entrarSala(){
//   const game = getDatafromform()
//   const url = `http://localhost:3000/gameroom?room=${game.room}&password=${game.password}&isHost=false`
//   const options = {

//       method: 'GET',
//   }
//   fetch(url,options)
//   .then(response=>response.json())
//   .then(data=>{
//     console.log(data)
//     switch(data.resp){
//       case "1":
//         //Sala nao existe
//         alert("Sala não existe!")
//       break
//       case "2":
//         //senha incorreta
//         alert("Senha Incorreta!")
//       break
//       case "3":
//         //tudo ok
//         deleteForm()
//         newGame(game.room)
//       break
//       case "4":
//         //tudo ok
//         alert("Sala Cheia!")
//       break
//     }
//   })
// }
// function getDatafromform(){
//   const nick = document.getElementById("nick").value
//   const room = document.getElementById("room").value
//   const password = document.getElementById("password").value
//   if (nick =="" || room == ""|| password ==""){
//     alert("Preencha todos os campos")
//     return false
//   }
//   const game = {room: room,
//     player: nick ,
//     password: password ,
//     }
//   return game
// }
// function deleteForm(){
//   const inhtml = new InHTML()
//   inhtml.DeleteIfExist("#form")
// }

console.log(`Conectando com stream`)

const realtime = new Ably.Realtime({
  authUrl: "/auth",
});

realtime.connection.once("connected", () => {
  myClientId = realtime.auth.clientId;
  globalChannel = realtime.channels.get("global_Channel");

  console.log("Cliente conectado com stream")
})

function load(){
  roomCode = getRandomRoomId();
  const input = document.getElementById("new_roomcode")
  input.value = roomCode
}
function hostNewGame(){
  localStorage.clear();
  let nicknameInput = document.getElementById("nick");
  nickname = nicknameInput.value;
  roomCode = document.getElementById("new_roomcode").value;

  localStorage.setItem("isHost", true);
  localStorage.setItem("nickname", nickname);
  localStorage.setItem("roomCode", roomCode);

  console.log("Preparando")

  initChannel = realtime.channels.get(roomCode)
  initChannel.subscribe(function(msg){
    if (msg.data.init){
      //server criou o jogo
      console.log("Iniciando jogo", msg.data.brain)
      newGame(msg.data.brain)
    } else{
      //server não criou o jogo
      alert("Não foi possível achar a sala")
    }
  })

  globalChannel.presence.enter({
    nickname: nickname,
    roomCode: roomCode,
    isHost: true,
  })

  // window.location.replace("/gameplay?room=" + roomCode + "&isHost=true");
}
function joinRoom(){
  localStorage.clear();
  let nicknameInput = document.getElementById("nick");
  nickname = nicknameInput.value;
  roomCode = document.getElementById("join_roomcode").value;
  
  localStorage.setItem("isHost", false);
  localStorage.setItem("nickname", nickname);
  localStorage.setItem("roomCode", roomCode);


  globalChannel.presence.enter({
    nickname: nickname,
    roomCode: roomCode,
    isHost: false,
  })

  window.location.replace("/gameplay?room=" + roomCode + "&isHost=false");
}
function getRandomRoomId() {
  return "room-" + Math.random().toString(36).substr(2, 8);
}