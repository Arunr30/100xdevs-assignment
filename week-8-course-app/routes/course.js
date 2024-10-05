const { Router } = require('express')
const { userMiddleware } = require('../middleware/user')
const { purchaseModel, courseModel } = require('../db')
const courseRouter = Router()

courseRouter.post('/purchases', userMiddleware, async (req, res) => {
    const userId = req.userId
    const courseId = req.body.courseId

    await purchaseModel.create({
        userId,
        courseId,
    })

    res.json({
        msg: 'course has purchased successfully!',
    })
})

courseRouter.get('/preview', async (req, res) => {
    const courses = await courseModel.find({})
    res.json({
        courses,
    })
})

module.exports = {
    courseRouter: courseRouter,
}

// 6700dbfa3dbbd0be604cf07a
