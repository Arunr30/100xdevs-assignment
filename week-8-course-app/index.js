const express = require('express')
const { userRoute } = require('./routes/user')
const { courseRouter } = require('./routes/course')
const app = express() // instance

app.use('/user', userRoute)
app.use('/course', courseRouter)

app.listen(3000)
