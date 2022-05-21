const express = require('express');
const path = require('path');
const routes = express.Router()
const dirmaster = path.dirname(path.dirname(__dirname+'/base.js'))


routes.get("/main.css", (req, res) => {
    res.sendFile(dirmaster+'/Css/main.css');
});
routes.get("/controller/formActions.js", (req, res) => {
    res.sendFile(dirmaster+'/Controller/formActions.js');
});
routes.get("/database/db.js", (req, res) => {
    res.sendFile(dirmaster+'/database/db.js');
});

module.exports = routes