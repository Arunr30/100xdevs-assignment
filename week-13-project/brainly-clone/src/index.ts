import express from 'express'
import { ContentModel, userModel } from './db.js'
import jwt from 'jsonwebtoken'
import { userMiddleware } from './middleware.js'

const app = express()
const JWT_SECRET = '123445'

app.use(express.json())

app.post('/api/v1/signup', async (req, res) => {
    // TODO: zod, hash the password
    const username = req.body.username
    const password = req.body.password

    try {
        await userModel.create({
            username: username,
            password: password,
        })

        res.json({
            message: 'you are signed up!',
        })
    } catch (e) {
        res.status(411).json({
            message: 'user already exist!',
        })
    }
})

app.post('/api/v1/signin', async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const existingUser = await userModel.findOne({
        username,
        password,
    })

    if (existingUser) {
        const token = jwt.sign(
            {
                id: existingUser._id,
            },
            JWT_SECRET
        )

        res.json({
            token: token,
        })
    } else {
        res.json({
            message: 'Invalid Credentials',
        })
    }
})

// @ts-ignore

app.post('/api/v1/content', userMiddleware, async (req, res) => {
    const title = req.body.title
    const link = req.body.link

    await ContentModel.create({
        title,
        link,
        // @ts-ignore
        userId: req.userId,
        tags: [],
    })

    return res.json({
        message: 'Content added!',
    })
})

app.get('/api/v1/content', userMiddleware, async (req, res) => {
    // @ts-ignore
    const userId = req.userId
    const content = await ContentModel.find({
        userId: userId,
    }).populate('userId', 'username')

    res.json({
        content,
    })
})

app.delete('/api/v1/content', (req, res) => {})

app.post('/api/v1/brain/share', (req, res) => {})

app.get('/api/v1/brain/:shareLink', (req, res) => {})

app.listen(3001, () => {
    console.log('port is connected')
})
