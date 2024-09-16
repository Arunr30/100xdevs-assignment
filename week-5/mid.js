const express = require("express");
const app = express();

function shouldAllow(req, res, next) {
  const age = req.query.age;
  if (age > 18) {
    next();
  } else {
    res.json({
      msg: "No!",
    });
  }
}

app.use(shouldAllow);

app.get("/", (req, res) => {
  res.json({
    msg: "All set!",
  });
});

app.listen(3001);
