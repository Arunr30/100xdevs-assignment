const { Router } = require('express')
const jwt = require('jsonwebtoken')
const { z } = require('zod')
const bycrypt = require('bcrypt')
const { adminModel, courseModel } = require('../db')
const { JWT_ADMIN_PASSWORD } = require('../config')
const { adminMiddleware } = require('../middleware/admin')
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

adminRouter.post('/', adminMiddleware, async (req, res) => {
    const adminId = req.userId
    const { title, description, imageUrl, price } = req.body

    const course = await courseModel.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId,
    })

    res.json({
        msg: 'course created!',
        courseId: course._id,
    })
})

adminRouter.put('/', adminMiddleware, async (req, res) => {
    const adminId = req.userId
    const { title, description, imageUrl, price, courseId } = req.body

    const course = await courseModel.updateOne(
        {
            _id: courseId,
            creatorId: adminId,
        },
        {
            title,
            description,
            imageUrl,
            price,
        }
    )
    if (!course) {
        return res.status(403).send('course not found')
    }
    res.json({
        msg: 'course updated',
        courseId: course._id,
    })
})

adminRouter.get('/', adminMiddleware, async (req, res) => {
    const adminId = req.userId
    const courses = await courseModel.find({
        creatorId: adminId,
    })
    res.json({
        msg: 'courses',
        courses,
    })
})

module.exports = {
    adminRouter: adminRouter,
}
