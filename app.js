const express = require('express')
const bodyParser = require('body-parser')
const expressEdge = require('express-edge').engine

const app = express()


//body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set up views and front-end files directories
app.use(express.static("public"));
app.use(expressEdge);
app.set("views", __dirname + "/views");

//imports routes 
const reportsController = require('./controllers/reports')
const saveReportController = require('./controllers/saveReport')
//routes
app.get('/', (req, res) => {
    res.render('reports')
})
app.get('/reports', reportsController)
app.post('/saveReport', saveReportController)
app.get('/submit', (req, res) => {
    res.render('submit')
})


const port = 3000 || process.env.PORT

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})