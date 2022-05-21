const express = require('express')
const routes = express.Router()
const database = require('../database/db')

routes.post("/enterServer", (req, res) => {
    const server = req.body
    const resp = database.enterServer(server)
    res.send({resp: resp})
});

module.exports = routes