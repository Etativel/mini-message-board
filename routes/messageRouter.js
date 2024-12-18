const express = require("express");
const router = express();
const controller = require("../controllers/inputMessageController");
router.use(express.urlencoded({ extended: true }));

// Homepage
router.get("/", controller.getHomepage);

// Get input Form
router.get("/new", controller.getForm);

// Post new message
router.post("/new", controller.postMessage);

// Get Message
router.get("/message/:users", controller.getMessage);

module.exports = router;
