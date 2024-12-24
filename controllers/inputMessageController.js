const messages = require("../models/messageData");

module.exports = {
  getForm: (req, res) => {
    res.render("form");
  },
};
