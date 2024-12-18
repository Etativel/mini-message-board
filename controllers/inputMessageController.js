const messages = require("../models/message");

module.exports = {
  getForm: (req, res) => {
    res.render("form");
  },
  getHomepage: (req, res) => {
    res.render("home.ejs", { title: "Mini Messageboard", messages: messages });
  },
  postMessage: (req, res) => {
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
  },
};
