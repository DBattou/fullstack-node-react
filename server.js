const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "build/")));

app.get("/home/", (req, res) => {
  console.log("Battou log HOME");
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("====================================");
  console.log("App listening on port 3000");
  console.log("====================================");
});
