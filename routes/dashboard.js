const express = require("express");
const router = express.Router();
const provenDb = require('@southbanksoftware/provendb-node-driver');
const Report = require('../controllers/reportHelper');
//require controllers

//require middleware

//handling requests
router.get("/", async(req, res) => {
    let reports = await Report.getAllReports()
    console.log(reports);
    res.render('dashboard')
});
module.exports = router;