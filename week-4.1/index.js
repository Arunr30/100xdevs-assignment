const express = require('express');

const app = express();
app.use(express.json());


let todos = [];
app.get('/info', function(req,res) {
    
    


})

app.post('/', function(req, res) {
    const newtodo = req.body;
    todos.push(newtodo);
    res.status(200).json(newtodo)
}) 

app.post('/update', function(req, res) {

})

app.delete('/delete', function(req, res) {

})



app.listen(3000)
