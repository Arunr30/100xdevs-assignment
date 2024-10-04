const express = require('express')
const app = express() // instance

app.post('/users/signup', (req, res) => {
    res.json({
        msg: 'signup endpoint',
    })
})

app.post('/users/signin', (req, res) => {
    res.json({
        msg: 'signin endpoint',
    })
})

app.post('/course/purchase', (req, res) => {
    res.json({
        msg: 'want top buy',
    })
})

app.post('/course/purchases', (req, res) => {
    res.json({
        msg: 'my purchases',
    })
})

app.post('/courses', (req, res) => {
    res.json({
        msg: 'all courses',
    })
})

app.listen(3000)
