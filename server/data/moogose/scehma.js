const mongoose = require('mongoose')

const todoList = new mongoose.Schema({
    name:String
})
module.exports= mongoose.model('todoList',todoList);