const express = require('express');
const jwt = require('jsonwebtoken')
const JWT_SECRET = "thedarkknight"

const app = express();

app.use(express.json())

let users =[];

app.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    users.push({
        username: username,
        password: password
    })

    res.json({
        msg : 'You are signed in!!'
    })
})

app.post('/signin', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = users.find((u) => u.username === username && u.password === password)
    if(user) {
        const token = jwt.sign({
            username:username
        }, JWT_SECRET)

        res.json({
            msg: token
        })
    } else {
        res.status(403).send({
            mgs: 'no bro your token is shit'
        })
    }
    
})

app.get('/me', (req, res) => {

    const token = req.headers.token
    const decode = jwt.verify(token, JWT_SECRET)
    const username = decode.username;

    const user = users.find((u) => u.username === username)

    if(user) {
        res.send({
            username: user.username,
            password: user.password
        })
    } else {
        res.send({
            msg: "could not found"
        })
    }

})

app.listen(3000)