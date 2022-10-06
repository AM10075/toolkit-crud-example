const express = require("express");
const cors = require("cors");
const { urlencoded, json } = require("express");
let app = express();

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/", (req, res) => {
  res.json({ GET: "GET" });
});
app.post("/", (req, res) => {
  res.json({ POST: req.body.data });
});
app.put("/", (req, res) => {
  res.json({ Put: req.body.data });
});
app.delete("/", (req, res) => {
  res.json({ Delete: req.body.data });
});

app.listen("5175", (req, res) => {
  console.log("App on port 5175");
});
