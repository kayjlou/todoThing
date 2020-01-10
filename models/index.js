const { model, Schema} = require('mongoose')

const Todo = require('./Todo.js')(model, Schema)

module.exports = {Todo}