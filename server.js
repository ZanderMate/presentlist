const express = require('express');
const logger = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(logger('dev'));


app.listen(port, () => { console.log('Server running on port ' + port) });