const { Router } = require('express')
const jwt = require('jsonwebtoken')
const { z } = require('zod')
const bycrypt = require('bcrypt')
const { adminModel } = require('../db')
const adminRouter = Router()

adminRouter.post('/signup', (req, res) => {})

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
