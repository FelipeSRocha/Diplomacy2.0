const express = require('express')
const routes = express.Router()
const database = require('../database/db')

routes.get("/enter", (req, res) => {
    const params = req.query
    if (params.isHost === "true"){
        const server = {room: params.room, password: params.password, player: params.player}

        const resp = database.addServer(server)

        if (resp == true){
            console.log("Redirecionando player para um server")
            res.redirect(`/gameroom?room=${server.room}&password=${server.password}&isHost=true`)
        } else {
            res.send(resp)
        }
    } 
    
});

module.exports = routes