const express = require("express");
const path = require("path");
const router = express();

router.use(express.urlencoded({ extended: true }));

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

// Homepage
router.get("/", (req, res) => {
  res.render("home.ejs", { title: "Mini Messageboard", messages: messages });
});

// Get input Form
router.get("/new", (req, res) => {
  res.render("form");
});

// Post new message
router.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.senderName,
    added: new Date(),
  });

  res.redirect("/");

  // res.render("backButton", {
  //   body: {
  //     name: req.body.senderName,
  //     message: req.body.messageText,
  //     date: new Date(),
  //   },
  // });
});

module.exports = router;
