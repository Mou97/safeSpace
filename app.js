const express = require('express')
const bodyParser = require('body-parser')

const app = express()


//body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//imports routes 
const reportsController = require('./controllers/reports')
const testController = require('./controllers/test')
//routes
app.get('/', (req, res) => {
    res.send('works')
})
app.get('/reports', reportsController)
app.post('/test', testController)


const port = 3000 || process.env.PORT

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})