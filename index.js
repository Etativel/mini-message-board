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

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.get("/", (req, res) => {
  res.render("home.ejs", { title: "Mini Messageboard", messages: messages });
});

app.use((req, res) => {
  res.send("404 Not Found");
});

app.listen(PORT, (req, res) => {
  console.log(`App listen to port ${PORT}`);
});
