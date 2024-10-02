const bcrypt = require('bcrypt')
const express = require('express')
const { UserModel, TodoModel } = require('./db')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'darkknight'
const { mongoose } = require('mongoose')
const { z } = require('zod')
mongoose.connect(
    'mongodb+srv://arunvasur:WGgxms36fZSYRbzt@cluster0.cqc6n.mongodb.net/todo-app-new-vscode'
)

const app = express()
app.use(express.json())

app.post('/signup', async (req, res) => {
    const requiredBody = z.object({
        email: z.string().min(3).max(40).email(),
        password: z.string().min(3).max(100),
        name: z.string().min(3).max(100),
    })

    const parsedDatawithSuccess = requiredBody.safeParse(req.body)
    if (!parsedDatawithSuccess.success) {
        res.json({
            msg: 'not correct details',
            error: parsedDatawithSuccess.error,
        })
        return
    }

    const email = req.body.email
    const password = req.body.password
    const name = req.body.name

    const hashedPassword = await bcrypt.hash(password, 5)
    console.log(hashedPassword)

    await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name,
    })
    res.json({
        msg: 'You are signed up!',
    })

    res.status(403).send({
        msg: 'User already exists!',
    })
    return
})

app.post('/signin', async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const user = await UserModel.findOne({
        email: email,
    })
    console.log(user)
    if (!user) {
        res.status(403).send({
            msg: 'invalid creds',
        })
        return
    }

    const matchPassword = await bcrypt.compare(password, user.password)

    if (matchPassword) {
        const token = jwt.sign(
            {
                id: user._id.toString(),
            },
            JWT_SECRET
        )

        res.json({
            Token: token,
        })
    } else {
        res.status(403).json({
            msg: 'Incorrect Credentials',
        })
    }
})

function auth(req, res, next) {
    const token = req.headers.token
    const decodeData = jwt.verify(token, JWT_SECRET)
    if (decodeData) {
        req.userId = decodeData.id
        next()
    } else {
        res.json({
            msg: 'Incorrect crentails',
        })
    }
}

app.post('/todo', auth, async (req, res) => {
    const desc = req.body.desc
    const isCompleted = req.body.isCompleted
    const userId = req.userId

    await TodoModel.create({
        desc,
        isCompleted,
        userId,
    })

    res.json({
        msg: 'todo created!',
    })
})

app.get('/todos', auth, async (req, res) => {
    const userId = req.userId

    const todos = await TodoModel.find({
        userId,
    })

    res.json({
        todos,
    })
})

app.listen(3000)
