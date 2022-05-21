const express = require("express");
const server = express();
const path = require('path');
const routesbase = require('./routes/base')
const routesaddserver = require('./routes/addserver')
const routesenterserver = require('./routes/enterserver')
const routesform = require('./routes/form')
const routesgamebase = require('./routes/gamebase')
const port = 3000;

// Static Files
server.use(express.static("public"));
server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.use(routesbase)
server.use(routesgamebase)
server.use(routesenterserver)
// server.use(routesform)

server.set("views", path.join(__dirname, "views"))
server.set("view engine", "ejs")

server.get("/", (req,res)=>{
    res.render("index")
})

server.listen(port, () => console.log(`Server rodando na porta: ${port}`));