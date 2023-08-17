const express = require("express");
const app = express();
const { connectToDb, getDb } = require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let db;
connectToDb((err) => {
  if (!err) {
    app.listen(3000);
  }
  db = getDb();
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/search", (req, res) => {
  res.send(req.body.location);
});

app.listen(3000);
