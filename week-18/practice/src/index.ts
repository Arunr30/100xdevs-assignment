const express = require('express')
import { PrismaClient } from "@prisma/client"
const app = new express()
const client = new PrismaClient()

app.use(express.json())

// @ts-ignore

// create a new user
app.post('/user', async(req, res) => {
  const {username, email} = req.body
  const user = await client.user.create({
    data: {username, email},
  })
  res.json(user)
})

// create a post for user 
// @ts-ignore
app.post('/post', async(req, res) => {
  const {title, content, authorId} = req.body
  const post = await client.post.create({
    data:{title, content, authorId}
  });
  res.json(post)
})

// @ts-ignore
app.get('/users', async(req, res) => {
  const users = await client.user.findMany({
    include: {
      posts: true
    }
  })
  res.json(users)
})

// @ts-ignore
app.get('/users/:id', async(req, res) => {
  const { id } = req.params;
  const user = await client.user.findUnique({
    where: {
      id: parseInt(id)
    },
      include: {
        posts: true
    }
  })
  res.json(user)
})

// @ts-ignore

app.put('/posts/:id', async(req, res) => {
  const {id} = req.params
  const {title, content} = req.body

  const post = await client.post.update({
    where: {
      id: Number(id)
    },
    data: {
      title,
      content
    }
  })
  res.json(post)
})


app.listen(3000, () => {
  console.log('port is connected')
})