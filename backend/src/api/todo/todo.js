const restful = require('node-restful')
const mongoose = restful.mongoose
const todoShema = new mongoose.Schema({
    description: { type: String, required: true },
    done: {type: Boolean, required: true, default: false},
    creatdAt:  { type: Date, default: Date.now }
})
 
module.exports = restful.model('Todo', todoShema)