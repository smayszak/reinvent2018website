const config = require('./config.js');
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

path = require('path'),
publicDir = path.join(__dirname,'public');

app.use(express.static(publicDir))

var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route

console.log("env: " + config.app.env);
console.log('port: ' + config.app.port);
app.listen(config.app.port);
module.exports = app;
