const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({
    msg: "hello world"
  })
})

app.listen(3000, () => {
  console.log('port is listening to 3000')
})