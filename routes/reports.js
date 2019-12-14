const express = require("express");
const router = express.Router();
//require controllers
const reportsController = require("../controllers/reports");
const saveReportController = require("../controllers/saveReport");
//require middleware

//handling requests
router.get('/', (req, res) => {
    res.render('reports')
});
router.get('/reports', reportsController)
router.post('/saveReport', saveReportController);


module.exports = router;