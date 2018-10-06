const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "public/")));

app.get("/", (req, res) => {
  const pathToIndex = path.join(__dirname, "public/", "index.html");

  console.log(pathToIndex);

  res.sendFile(pathToIndex);
});

app.listen(3000, () => {
  console.log("====================================");
  console.log("App listening on port 3000");
  console.log("====================================");
});
