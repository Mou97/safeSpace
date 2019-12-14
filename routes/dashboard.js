const express = require("express");
const router = express.Router();
//require controllers

//require middleware

//handling requests
router.get("/", (req, res) => {
    res.render('dashboard')
});
module.exports = router;