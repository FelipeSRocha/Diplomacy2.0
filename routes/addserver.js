const express = require('express')
const routes = express.Router()
const database = require('../database/db')
const path = require('path');
const dirmaster = path.dirname(path.dirname(__dirname+'/base.js'))



routes.post("/addServer", (req, res) => {
    const server = req.body
    const resp = database.addServer(server)
    res.setHeader('Content-Type','text/html')
    res.sendFile(dirmaster+'/index.html')

    // 
});

module.exports = routes