const express = require("express");
const router = express.Router();
//require controllers
const homeController = require("../controllers/home");
//require middleware

//handling requests
router.get("/", homeController);
module.exports = router;