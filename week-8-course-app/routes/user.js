const { Router } = require('express')
const userRouter = Router()
const { z } = require('zod')
const bycrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { userModel } = require('../db')
const { JWT_USER_PASSWORD } = require('../config')

userRouter.post('/signup', async (req, res) => {
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
    await userModel.create({
        email: email,
        password: hashPassword,
        firstName: firstName,
        lastName: lastName,
    })
    res.json({
        msg: 'signed up!',
    })
})

userRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({
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
            JWT_USER_PASSWORD
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

userRouter.post('/purchase', (req, res) => {
    res.json({
        msg: 'want top buy',
    })
})

module.exports = {
    userRouter: userRouter,
}
