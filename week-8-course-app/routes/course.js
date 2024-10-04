const { Router } = require('express')
const courseRouter = Router()

courseRouter.post('/purchases', (req, res) => {
    res.json({
        msg: 'my purchases',
    })
})

courseRouter.get('/preview', (req, res) => {
    res.json({
        msg: 'all courses',
    })
})

module.exports = {
    courseRouter: courseRouter,
}
