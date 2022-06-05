const express = require('express')
const routes = express.Router()
const realtime = require('../database/db')

let globalChannel;

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