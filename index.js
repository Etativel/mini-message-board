const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const assetPath = path.join(__dirname, "public");
const useRoute = require("./routes/messageRouter.js");

// app.use(express.urlencoded({ extended: true }));

app.use(express.static(assetPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", useRoute);

app.use((req, res) => {
  res.send("404 Not Found");
});

app.listen(PORT, (req, res) => {
  console.log(`App listen to port ${PORT}`);
});
