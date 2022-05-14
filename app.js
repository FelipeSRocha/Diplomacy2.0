// const http = require("http")
// const fs = require('fs')
// const port = 3000

// const server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     fs.readFile('index.html', function(error, data){
//         if (error){
//             res.writeHead(404)
//             res.write("Error: File Not Found")
//         }else{
//             res.write(data)
//         }
//         res.end
//     }) 
// })

// server.listen(port, function(error){
//     if (error){
//         console.log("Erro")
//     } else{
//         console.log(`Server ouvindo na porta ${port}`)
//     }
// })

const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send("Seja bem Vindo")
    // res.sendFile('E:/Felipe/JS/Projeto Diplomacy/index.html')
})

app.listen(3000, function(){
    console.log("Servidor rodando na url http://localhost:3000")
})