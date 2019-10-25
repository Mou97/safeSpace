const express = require('express')
const { MongoClient } = require('mongodb');

const ProvenDB = require('@southbanksoftware/provendb-node-driver').Database;

const app = express()

// Replace this with the URI from the ProvenDB UI.
const { provenDB_URI } = require('./config/provenDb');
const { db_name } = require('./config/provenDb')
let dbObject;
let collection;
let pdb;

// First we establish a connection to ProvenDB.
MongoClient.connect(provenDB_URI, {
    useNewUrlParser: true,
    // useUnifiedTopology: true
})
    .then(client => {
        // Replace this with the database name from the ProvenDB UI.
        dbObject = client.db('devfest2k19');
        pdb = new ProvenDB(dbObject); // Mongo Database with helper functions.
        collection = pdb.collection('provenReport'); // With ProvenDB Driver.
        console.log('db connected')
    })
    .catch(err => {
        console.error('Error connecting to ProvenDB:');
        console.error(err);
        process.exit();
    });


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