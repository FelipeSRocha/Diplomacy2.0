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
server.use(routesaddserver)
server.use(routesenterserver)
server.use(routesform)

server.listen(port, () => console.log(`Server rodando na porta: ${port}`));