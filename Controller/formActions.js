let nickname = "";
let roomCode = "";
let globalChannel;
let truthChannel;
let myClientId;
let myChannel;
let myChannelName;
let gameOn = false;
let players = {};
let totalPlayers = 0;
let game;
let myGameRoomName;
let myGameRoomCh;
let myNickname
let myGameRoomCode
let amIHost

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

  truthChannel = realtime.channels.get(roomCode)
  truthChannel.subscribe(function(msg){
    switch (msg.data.type){
      case "init":
        newGame(msg.data)
        break
      case "newPlayer":

        break
      case "action":
        console.log("resposta da action recebida")
        updateTruth(msg.data)
        break
      case "leavePlayer":

        break
      default:
        alert("Não foi possível achar a sala")
    }
  })

  globalChannel.presence.enter({
    nickname: nickname,
    roomCode: roomCode,
    isHost: true,
  })

}
function joinRoom(){
  localStorage.clear();
  let nicknameInput = document.getElementById("nick");
  nickname = nicknameInput.value;
  roomCode = document.getElementById("join_roomcode").value;

  truthChannel = realtime.channels.get(roomCode)
  truthChannel.subscribe(function(msg){
    switch (msg.data.type){
      case "init":
        newGame(msg.data)
        break
      case "newPlayer":

        break
      case "action":
        console.log("resposta da action recebida")
        updateTruth(msg.data)
        break
      case "leavePlayer":

        break
      default:
        alert("Não foi possível achar a sala")
    }
  })

  globalChannel.presence.enter({
    nickname: nickname,
    roomCode: roomCode,
    isHost: false,
  })
}
function getRandomRoomId() {
  return "room-" + Math.random().toString(36).substr(2, 8);
}