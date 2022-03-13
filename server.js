var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser')
var app = express();
var port = 8081;

//use ejs and express layouts
app.set('view engine', 'ejs')
app.use(expressLayouts);

//use body-parser
app.use(express.urlencoded({ extended: true }))

//route app
var router = require('./app/routes');
app.use('/', router);

//set static files (css and images, etc) Location
app.use(express.static(__dirname + '/public'));

//start the server
app.listen(port, function(){
    console.log('app');
});

