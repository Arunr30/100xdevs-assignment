const express = require("express");

const app = express();

function logicHandler() {}

app.get("/sum", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    ans: a + b,
  });
});

app.get("/multiply", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a * b,
  });
});

app.get("/divide", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a / b,
  });
});

app.get("/subtract", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a - b,
  });
});

app.listen(3000);
