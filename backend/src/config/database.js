const mongoose = require('mongoose')
mongoose.Promise = global.Promise //usar do proprio node / tirar mensagem de advertencia
module.exports = mongoose.connect('mongodb://localhost/todo')