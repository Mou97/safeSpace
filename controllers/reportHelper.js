const { MongoClient } = require('mongodb');
const ProvenDB = require('@southbanksoftware/provendb-node-driver').Database;


// Replace this with the URI from the ProvenDB UI.
const { provenDB_URI } = require('../config/provenDb');
const { db_name } = require('../config/provenDb')
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


module.exports = {
    getAllReports: report =>
        new Promise((resolve, reject) => {
            if (collection) {
                collection.find(report).toArray((queryError, result) => {
                    if (queryError) {
                        reject(new Error('Error fetching reports.'));
                    } else {
                        resolve(result);
                    }
                });
            }
        }),
    proveNewReport: report =>
        new Promise((resolve, reject) => {
            const newDocument = {
                report,
                uploadDate: Date.now()
            };
            if (collection) {
                collection.insertOne(newDocument, insertError => {
                    if (insertError) {
                        reject(new Error('Error inserting document'));
                    } else {
                        /**
                         * With the ProvenDB Driver.
                         */
                        pdb
                            .submitProof()
                            .then(result => {
                                console.log(result);
                                resolve('New Proof Created');
                            })
                            .catch(error => {
                                console.error(error);
                                reject(new Error('ERROR: Could not prove new version.'));
                            });
                    }
                });
            } else {
                reject(new Error('Could not acquire collection'));
            }
        })
}