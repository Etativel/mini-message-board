const db = require("../db/queries");
const { main } = require("../db/populatedb");

async function getAllMessagesHandler(req, res) {
  main();
  const messages = await db.getAllMessages();
  res.render("home", { title: "Mini Messageboard", messages: messages });
}

async function getUserHandler(req, res) {
  const username = req.params.users;
  const message = await db.getUser(username);
  console.log(username);
  console.log(message);
  res.render("userMessage.ejs", { message: message[0] });
}

async function insertUserHandler(req, res) {
  const insertValue = {
    username: req.body.username,
    message_content: req.body.message_content,
  };
  await db.insertUser(insertValue);
  res.redirect("/");
}

async function deleteUserHandler(req, res) {
  const { id } = req.params;
  await db.deleteUser(id);
  res.redirect("/");
}

module.exports = {
  getAllMessagesHandler,
  getUserHandler,
  insertUserHandler,
  deleteUserHandler,
};
