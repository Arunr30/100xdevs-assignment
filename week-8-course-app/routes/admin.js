const { Router } = require('express')
const jwt = require('jsonwebtoken')
const { z } = require('zod')
const bycrypt = require('bcrypt')
const { adminModel } = require('../db')
const { JWT_ADMIN_PASSWORD } = require('../config')
const adminRouter = Router()

adminRouter.post('/signup', async (req, res) => {
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        password: z.string().min(3).max(30),
        firstName: z.string().min(1).max(50),
        lastName: z.string().min(1).max(50),
    })

    const parsedData = requiredBody.safeParse(req.body)
    if (!parsedData.success) {
        res.json({
            msg: 'incorrect statements',
            error: parsedData.error,
        })
        return
    }

    const { email, password, firstName, lastName } = req.body
    const hashPassword = await bycrypt.hash(password, 5)
    console.log(hashPassword)
    await adminModel.create({
        email: email,
        password: hashPassword,
        firstName: firstName,
        lastName: lastName,
    })
    res.json({
        msg: 'signed up!',
    })
})

adminRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body
    const user = await adminModel.findOne({
        email: email,
    })
    if (!user) {
        res.status(403).send({
            msg: 'invalid creds',
        })
        return
    }
    const matchPassword = await bycrypt.compare(password, user.password)
    if (matchPassword) {
        const token = jwt.sign(
            {
                id: user._id,
            },
            JWT_ADMIN_PASSWORD
        )
        res.json({
            token: token,
        })
    } else {
        res.status(403).send({
            msg: 'invalid details',
        })
    }
})

adminRouter.put('/', async (req, res) => {
    res.json({
        msg: 'updated',
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
