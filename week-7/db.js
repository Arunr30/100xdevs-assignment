const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId;

const Users = new Schema({
    name : String,
    email : String,
    password : String
})

const Todos = new Schema({
    desc : String,
    isCompleted : Boolean,
    userId : ObjectId
})

const UserModel = mongoose.model('users', Users)
const TodoModel = mongoose.model('todos', Todos)

module.exports({
    UserModel : UserModel,
    TodoModel : TodoModel
})
