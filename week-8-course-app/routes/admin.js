const { Router } = requie('express')

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

adminRouter.put('/update', (req, res) => {
    res.json({
        msg: 'update',
    })
})

adminRouter.get('/preview', (req, res) => {
    res.json({
        msg: 'preview',
    })
})

module.exports = {
    adminRouter: adminRouter,
}
