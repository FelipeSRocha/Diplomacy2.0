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
    res.sendFile(dirmaster+'/Model/Players_database.js');
});
routes.get("/Model/Database.js", (req, res) => {
    res.sendFile(dirmaster+'/Model/Database.js');
});
routes.get("/Controller/Game.js", (req, res) => {
    res.sendFile(dirmaster+'/Controller/Game.js');
});
routes.get("/Controller/brain.js", (req, res) => {
    res.sendFile(dirmaster+'/Controller/brain.js');
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
routes.get("/SVGMap/MapaSVG.svg", (req, res) => {
    res.sendFile(dirmaster+'/SVGMap/MapaSVG.svg');
});
routes.get("/Img/ProdEnergia.png", (req, res) => {
    res.sendFile(dirmaster+'/Img/ProdEnergia.png');
});
routes.get("/Img/ProdComida.png", (req, res) => {
    res.sendFile(dirmaster+'/Img/ProdComida.png');
});
routes.get("/Img/ProdExercito.png", (req, res) => {
    res.sendFile(dirmaster+'/Img/ProdExercito.png');
});
routes.get("/Img/ProdTecnologia.png", (req, res) => {
    res.sendFile(dirmaster+'/Img/ProdTecnologia.png');
});
routes.get("/Img/Energia.png", (req, res) => {
    res.sendFile(dirmaster+'/Img/Energia.png');
});
routes.get("/Img/Comida.png", (req, res) => {
    res.sendFile(dirmaster+'/Img/Comida.png');
});
routes.get("/Img/Exercito.png", (req, res) => {
    res.sendFile(dirmaster+'/Img/Exercito.png');
});
routes.get("/Img/Tecnologia.png", (req, res) => {
    res.sendFile(dirmaster+'/Img/Tecnologia.png');
});
routes.get("/SVGMap/Energia.svg", (req, res) => {
    res.sendFile(dirmaster+'/SVGMap/Energia.svg');
});
routes.get("/SVGMap/Comida.svg", (req, res) => {
    res.sendFile(dirmaster+'/SVGMap/Comida.svg');
});
routes.get("/SVGMap/Tecnologia.svg", (req, res) => {
    res.sendFile(dirmaster+'/SVGMap/Tecnologia.svg');
});
routes.get("/SVGMap/Exercito.svg", (req, res) => {
    res.sendFile(dirmaster+'/SVGMap/Exercito.svg');
});

module.exports = routes