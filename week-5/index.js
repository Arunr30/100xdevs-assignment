const express = require("express");
const app = express();

function allow(req, res, next) {
  const age = req.query.age;
  if (age > 18) {
    next();
  } else {
    res.json({
      msg: "you are fucked!",
    });
  }
}

app.use(allow);

app.get("/", function (req, res) {
  res.json({
    msg: "all set",
  });
});

app.listen(3000);
