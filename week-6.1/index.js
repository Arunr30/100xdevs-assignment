const express = require('express')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'Arunvasu123'
const app = express()

app.use(express.json())

let users = []

app.post('/signup', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    users.push({
        username,
        password,
    })

    res.json({
        msg: 'You are signed in!',
    })
})

app.post('/signin', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = users.find(
        (u) => u.username === username && u.password === password
    )
    if (!user) {
        res.json({
            msg: 'Invalid crentails',
        })
        return
    } else {
        const token = jwt.sign(
            {
                username,
            },
            JWT_SECRET
        )

        res.json({
            yourToken: token,
        })
    }
})

function auth(req, res, next) {
    const token = req.headers.token
    const decodedStr = jwt.verify(token, JWT_SECRET)

    if (decodedStr.username) {
        req.username = decodedStr.username
        next()
    } else {
        res.json({
            msg: 'You are not logged in',
        })
    }
}
app.use(auth)

app.get('/me', (req, res) => {
    const user = users.find((u) => u.username === req.username)
    if (user) {
        res.json({
            username: user.username,
            password: user.password,
        })
    } else {
        res.status(403).send({
            msg: 'Invalid!',
        })
    }
})

app.listen(3000)
