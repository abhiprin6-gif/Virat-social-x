const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("VIRAT SOCIAL X running at http://localhost:3000");
});
