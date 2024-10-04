const { Router } = require('express')
const { adminModel } = require('../db')
const adminRouter = Router()

adminRouter.post('/signup', (req, res) => {
    res.json({
        msg: 'signup',
    })
})

adminRouter.post('/signin', (req, res) => {
    res.json({
        msg: 'signin',
    })
})

adminRouter.put('/', (req, res) => {
    res.json({
        msg: 'update',
    })
})

adminRouter.get('/', (req, res) => {
    res.json({
        msg: 'preview',
    })
})

module.exports = {
    adminRouter: adminRouter,
}
