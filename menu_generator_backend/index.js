const express = require("express");
const app = express();
const port = 3050;
const cors = require("cors");

// app.use((req, res) => {
// })

const corsOptions = {};

app.use(cors());

app.get("/qrVal", (req, res) => {
  res.send("Hello World");
  const body = req.body;
});

app.listen(port, () => {
  console.log("express started");
});
