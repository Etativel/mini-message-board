const express = require("express");
const router = express();
const controller = require("../controllers/inputMessageController");
const dbController = require("../controllers/dbController");
router.use(express.urlencoded({ extended: true }));

router.get("/", dbController.getAllMessagesHandler);
router.get("/new", controller.getForm);
router.post("/new", dbController.insertUserHandler);
router.get("/message/:users", dbController.getUserHandler);
router.get("/delete/:id", dbController.deleteUserHandler);
router.get("/all-messages", dbController.getAllMessagesHandler);
module.exports = router;
