const express = require('express')
const routes = express.Router()
const path = require('path');
const dirmaster = path.dirname(path.dirname(__dirname+'/base.js'))



routes.get("/", (req, res) => {
    res.sendFile(dirmaster+"/form.html");
});

module.exports = routes