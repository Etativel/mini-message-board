const express = require("express");
const path = require("path");
const router = express();
const controller = require("../controllers/inputMessageController");
router.use(express.urlencoded({ extended: true }));

// Homepage
router.get("/", controller.getHomepage);

// Get input Form
router.get("/new", controller.getForm);

// Post new message
router.post("/new", controller.postMessage);

module.exports = router;
