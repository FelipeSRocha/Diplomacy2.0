const express = require('express')
const routes = express.Router()
const database = require('../database/db')

routes.post("/addServer", (req, res) => {
    const server = req.body
    const resp = database.addServer(server)
    res.send(resp)
});

module.exports = routes