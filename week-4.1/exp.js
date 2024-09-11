const express = require('express')
const app = express()
const users = [
    {
        name: 'John Doe',
        Kidneys: [
            {
                healthy: false,
            },
        ],
    },
]

app.use(express.json())

app.get('/', function (req, res) {
    const johnKidneys = users[0].Kidneys
    let numberOfKidney = johnKidneys.length
    let numberofhealthyKidney = 0
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberofhealthyKidney++
        }
    }
    const numberOfUnHealthyKidneys = numberOfKidney - numberofhealthyKidney
    res.json({
        numberOfKidney,
        numberofhealthyKidney,
        numberOfUnHealthyKidneys,
    })
})

app.post('/', function (req, res) {
    const isHealthy = req.body.isHealthy
    users[0].Kidneys.push({
        healthy: isHealthy,
    })
    res.json({
        msg: 'Done!',
    })
})

app.put('/', function (req, res) {
    for (let i = 0; i < users[0].Kidneys.length; i++) {
        users[0].Kidneys[i].healthy = true
    }

    res.json({
        msg: 'Ok!',
    })
})

app.delete('/', function (req, res) {
    let newKidneys = []
    for (let i = 0; i < users[0].Kidneys.length; i++) {
        if (users[0].Kidneys[i].healthy) {
            newKidneys.push({
                healthy: true,
            })
        }
    }

    users[0].Kidneys = newKidneys
    res.json({})
})

app.listen(3000)
