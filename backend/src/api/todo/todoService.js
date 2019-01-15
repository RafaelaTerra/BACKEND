const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete']) //get - pega todos os elementos/ post - inserção/ put - alteração
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo