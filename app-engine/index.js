'use strict';

const express = require('express');
var mysql = require('mysql');
//const Firestore = require('@google-cloud/firestore');

const auth = require('./auth');

const app = express();
app.enable('trust proxy');

var con = mysql.createConnection({
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/pagamenti', auth, (req, res) => {
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM pagamenti", function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    });
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});

module.exports = app;