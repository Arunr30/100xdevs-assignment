/*
post --> create
Get --> read
put --> update
delete --> update
*/

// here i am making healthy hearts and unhealthy hearts.

const express = require('express')
const app = express()

app.use(express.json())

const users = [
    {
        name: 'Kalyan',
        hearts: [
            {
                healthy: true,
            },
        ],
    },
]

app.get('/', function (req, res) {
    const kalyanHearts = users[0].hearts
    let totalHearts = kalyanHearts.length
    let healthyHearts = 0
    for (let i = 0; i < kalyanHearts.length; i++) {
        if (kalyanHearts[i].healthy) {
            healthyHearts++
        }
    }

    const unHealthyHearts = totalHearts - healthyHearts
    res.json({
        totalHearts,
        healthyHearts,
        unHealthyHearts,
    })
})

app.listen(3001)

app.post('/', function (req, res) {
    let isHealthy = req.body.isHealthy
    users[0].hearts.push({
        healthy: isHealthy,
    })
    res.json({
        msg: 'done!',
    })
})

app.put('/', function (req, res) {
    for (let i = 0; i < users[0].hearts.length; i++) {
        users[0].hearts[i].healthy = true
    }
    res.json({
        msg: 'updated!',
    })
})

app.delete('/', function (req, res) {
    let newHearts = []
    if (atleastOneHeart()) {
        for (let i = 0; i < users[0].hearts.length; i++) {
            newHearts.push({
                healthy: true,
            })
        }
    }

    users[0].hearts = newHearts
    res.status(411).json({
        msg: 'no un healthy hearts',
    })
})

function atleastOneHeart() {
    let oneHeartHealthy = false
    if (!users[0].hearts.healthy) {
        oneHeartHealthy = true
    }
    return oneHeartHealthy
}
