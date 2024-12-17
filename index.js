// MikeSen current false next True
// MikeSen True

const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.use((req, res) => {
  res.send("404 Not Found");
});

app.listen(PORT, (req, res) => {
  console.log(`App listen to port ${PORT}`);
});
