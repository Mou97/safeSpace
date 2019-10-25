const express = require('express')


const app = express()

//connect to the database
const db = require("./config/database");
db.authenticate()
    .then(() => {
        console.log("Database connected");
    })
    .catch(error => {
        console.log(error.message);
    });

//synchronize database
db.sync({ forced: true }).then(() => {
    console.log("database synchronized ");
});


const port = 3000 || process.env.PORT

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})