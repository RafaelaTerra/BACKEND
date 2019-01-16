const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server= express()
const allCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allCors)

server.listen(port, function(){
    console.log(`BACKEND is running no port ${port}.`)
})


module.exports = server