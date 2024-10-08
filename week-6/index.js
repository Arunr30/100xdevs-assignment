const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "TheDarkKnight"; 


const app = express();

app.use(express.json());
//users
let users = [];

// signin endpoint
app.post('/signup', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    
    users.push({
        username : username,
        password : password
    })
    res.json({
        msg : 'You are signed in!!'
    })

})
// signup endpoint
app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((u) => u.username === username && u.password === password);
    if(user) {
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)
        res.json({
            token: token
        })
    } else {
        res.status(404).send({
            msg: 'your token is shit!'
        })
    }  
})

app.get("/me", (req, res) => {
    const token = req.headers.token;
    const decodedString = jwt.verify(token, JWT_SECRET)
    const username = decodedString.username

    const user = users.find(user => user.username === username);
    if(user) {
        res.json({
            username: user.username,
            password: user.password
        })
    } else {
        res.status(403).send({
            msg: 'you fucked bro!'
        })
    }
})
app.listen(3000)