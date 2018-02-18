const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const logger = require('morgan');

const api = require('./routes');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var baseUrl = express.static(path.join(__dirname, '../dist'));
app.use('/', baseUrl);
app.use('/api', api);
app.use('*', baseUrl);

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost: ${port}`));

module.exports = app;
