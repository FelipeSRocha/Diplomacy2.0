const express = require("express");
const server = express();

const routesindex = require('./routes/index')
const routesformbase = require('./routes/formbase')
const routesgamebase = require('./routes/gamebase')
const routesaddserver = require('./routes/addserver')
const routesenterserver = require('./routes/enterserver')

const port = 3000;

// Static Files
server.use(express.static("public"));
server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.use(routesindex)
server.use(routesformbase)
server.use(routesgamebase)
server.use(routesaddserver)
server.use(routesenterserver)


server.listen(port, () => console.log(`Server rodando na porta: ${port}`));