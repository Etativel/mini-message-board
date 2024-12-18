const messages = require("../models/messageData");

module.exports = {
  getForm: (req, res) => {
    res.render("form");
  },
  getHomepage: (req, res) => {
    res.render("home.ejs", { title: "Mini Messageboard", messages: messages });
  },
  getMessage: (req, res) => {
    const userId = req.params.users;
    const userMessage = messages.filter(
      (message) => message.user === userId
    )[0];
    // console.log(userMessage.text);
    res.render("userMessage.ejs", { message: userMessage });
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
