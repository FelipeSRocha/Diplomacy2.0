let express = require('express')
let routes = express.Router()


routes.get('/', function(req, res){
    res.send("Seja bem Vindo teste")
    // res.sendFile('E:/Felipe/JS/Projeto Diplomacy/index.html')
})

module.exports = routes
