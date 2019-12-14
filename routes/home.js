const express = require("express");
const router = express.Router();
//require controllers
const homeController = require("../controllers/home");
//require middleware

//handling requests
router.get("/", homeController);
router.get('/upload', (req, res) => {
    res.render('upload');
});
router.get('/test', (req, res) => {
    res.render('test');
});
router.post('/upload', (req, res) => {
    console.log("files");
    console.log(req.files);
    res.redirect("/upload");
});
module.exports = router;