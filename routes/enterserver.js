const express = require('express')
const routes = express.Router()
const database = require('../database/db')
const envConfig = require("dotenv").config();
const Ably = require("ably");
const ABLY_API_KEY = process.env.ABLY_API_KEY
const realtime = new Ably.Realtime(ABLY_API_KEY);


routes.get("/gameroom", (req, res) => {

    const server = req.query
    if (server.isHost === "true"){
        res.send(true)
        const newStream = (room)=>{
            const subChannel = realtime.channels.get(`${room}-Player`);
            const pubChannel = realtime.channels.get(`${room}-Server`);
            subChannel.subscribe(function(msg) {
                console.log(msg.data)
                pubChannel.publish('resp',{resp:(msg.data.init*2)})
              });
            console.log("Stream com novo server criado")
        }
        newStream(server.room)
    }

});
const uniqueId = function () {
    return "id-" + Math.random().toString(36).substr(2, 16);
  };
  
routes.use(express.static("js"));

routes.get("/auth", (request, response) => {
    const tokenParams = { clientId: uniqueId() };
    realtime.auth.createTokenRequest(tokenParams, function (err, tokenRequest) {
        if (err) {
        response
            .status(500)
            .send("Error requesting token: " + JSON.stringify(err));
        } else {
        response.setHeader("Content-Type", "application/json");
        response.send(JSON.stringify(tokenRequest));
        }
    });
});

module.exports = routes