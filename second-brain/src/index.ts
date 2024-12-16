import express from "express"
import mongoose from "mongoose"
import  jwt  from "jsonwebtoken"
import {z} from "zod"
import bcrypt from "bcryptjs"
import { userModel } from "./db";



const app = express();
app.use(express.json())

// zod validation, hash the password

app.post('/api/v1/signup', async (req, res) => {
  const {username, password} = req.body
  

  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    await userModel.create({
      username,
      password: hashedPassword
    })
  } catch (error) {
    console.log(error)
  }
  res.json({
    msg: "you are signed up!"
  })
})

app.post('/api/v1/signup', (req, res) => {

})

app.post('/api/v1/content',(req, res) => {

})

app.get('/api/v1/content', (req, res) => {

})

app.delete('/api/v1/delete', (req, res) => {

})

app.post('/api/v1/brain/share', (req, res) => {

})

app.get('/api/v1/brain/:shareLink', (req, res) => {

})

app.listen(3000, () => {
  console.log('port is listening')
})

