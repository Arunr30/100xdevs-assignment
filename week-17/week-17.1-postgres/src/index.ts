import {Client} from "pg";
const express = require('express')
const app = express();
app.use(express.json());

// const pgClient = new Client("postgresql://neondb_owner:qQAYmDMwX5O3@ep-cool-bar-a53p0wva.us-east-2.aws.neon.tech/neondb?sslmode=require")

const pgClient = new Client({
  user: "neondb_owner",
  password: "qQAYmDMwX5O3",
  port: 5432,
  host: "ep-cool-bar-a53p0wva.us-east-2.aws.neon.tech",
  database: "neondb",
  ssl: true
})

pgClient.connect();
// @ts-ignore
app.post('/signup', async (req, res) => {
  try {
    const {username, password, email} = req.body
    const insertQuery = `Insert into users (username, password, email) VALUES($1, $2, $3)`
    const values = [username, password, email]
    const response = await pgClient.query(insertQuery, values)
    console.log(response)
    res.json({
      msg: "you have signed up"
    })
  } catch (error) {
    // @ts-ignore
    console.log('error while signed up', error.message)
  }
})

app.listen(5001, () => {
  console.log('port is serving')
})
