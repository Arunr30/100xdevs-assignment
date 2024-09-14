const express = require('express')

const app = express()

function oldEnough(age) {
    if (age >= 14) {
        return true
    } else {
        return false
    }
}

function oldEnoughMiddleWare(req, res, next) {
    const age = req.query.age
    if (age >= 14) {
        next()
    } else {
        res.json({
            msg: 'You are fucked!',
        })
    }
}

app.use(oldEnoughMiddleWare)

app.get('/ride1', function (req, res) {
    res.json({
        msg: 'You are good to go in ride 1!',
    })
})

app.get('/ride2', function (req, res) {
    res.json({
        msg: 'You are good to go in ride 2!',
    })
})

app.listen(3000)
