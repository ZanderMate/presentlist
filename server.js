const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const compression = require('compression');

const app = express();
app.use(compression());

const port = process.env.PORT || 3001;
const db = require("./models");

const connection = mysql.createConnection({
    host: 'sm9j2j5q6c8bpgyq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 's958pqzis4pgsm76',
    password: 'y3a0pj8g3iiwochn',
    database: 'n8qapnqqmi90onf5'
});

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    console.log('Connected to the MySQL server.')
});

require("./controllers/present_controllers")(app);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('Server running on port ' + port)
    });
});