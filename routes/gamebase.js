const express = require('express');
const path = require('path');
const routes = express.Router()
const dirmaster = path.dirname(path.dirname(__dirname+'/base.js'))


routes.get("/Css/Layout_Style.css", (req, res) => {
    res.sendFile(dirmaster+'/Css/Layout_Style.css');
});
routes.get("/Model/Player.js", (req, res) => {
    res.sendFile(dirmaster+'/Model/Player.js');
});
routes.get("/Model/Players_database.js", (req, res) => {
    res.sendFile(dirmaster+'/Model/Players_database.js ');
});
routes.get("/Model/Database.js", (req, res) => {
    res.sendFile(dirmaster+'/Model/Database.js');
});
routes.get("/Controller/Game.js", (req, res) => {
    res.sendFile(dirmaster+'/Controller/Game.js');
});
routes.get("/View/InHTML.js", (req, res) => {
    res.sendFile(dirmaster+'/View/InHTML.js');
});
routes.get("/View/view.js", (req, res) => {
    res.sendFile(dirmaster+'/View/view.js');
});
routes.get("/Controller/Controller.js", (req, res) => {
    res.sendFile(dirmaster+'/Controller/Controller.js');
});


module.exports = routes