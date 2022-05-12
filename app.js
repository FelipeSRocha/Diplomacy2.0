const express = require('express')
let routesIndex = require('./routes/index')

const app = express()

app.use(routesIndex)

app.listen(3000, function(){
    console.log("Servidor rodando na url http://localhost:3000")
})