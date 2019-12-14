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

//require routes
const home = require('./routes/home');
const reports = require('./routes/reports.js');
const dashboard = require('./routes/dashboard');

//use routes
app.use('/', home);
app.use('/reports', reports);
app.use('/dashboard', dashboard);
app.get('/submit', (req, res) => {
    res.render('submit');
});


const port = 3000 || process.env.PORT

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})