const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId;

const Users = new Schema({
    name : String,
    email : {type : String, unique : true},
    password : String
})

const Todos = new Schema({
    desc : String,
    isCompleted : Boolean,
    userId : ObjectId
})

const UserModel = mongoose.model('users', Users)
const TodoModel = mongoose.model('todos', Todos)


module.exports = {
    UserModel,
    TodoModel
}
