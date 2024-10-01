const express = require('express');
const {UserModel, TodoModel} = require('./db');

const app = express();
app.use(express.json());

app.post('/signup', (req, res) => {
    
})

app.post('/login', (req, res) => {
    
})

app.post('/todo', (req, res) => {
    
})


app.get('/todos', (req, res) => {
    
})

app.listen(3000);
