const express = require('express')
const mongoose = require('mongoose')
const { userRouter } = require('./routes/user')
const { courseRouter } = require('./routes/course')
const { adminRouter } = require('./routes/admin')
const app = express() // instance
app.use(express.json())
app.use('/api/v1/user', userRouter)
app.use('/api/v1/course', courseRouter)
app.use('/api/v1/admin', adminRouter)

async function main() {
    try {
        await mongoose.connect()
        app.listen('3000')
        console.log('port is listeneing to 3000')
    } catch (e) {
        console.error('Error connecting to db :', e)
    }
}
main()
