const express = require('express');
const logger = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;
const db = require("./models");

const connection = mysql.createConnection({
    host: 'sm9j2j5q6c8bpgyq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 's958pqzis4pgsm76',
    password: 'y3a0pj8g3iiwochn',
    database: 'n8qapnqqmi90onf5'
});

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.')
})

app.use(logger('dev'));

db.sequelize.sync().then(() => {
    app.listen(port, () => { console.log('Server running on port ' + port) });
});