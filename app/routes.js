//require express
var express = require('express');
var path = require('path');

//create router object
var router = express.Router();

//export router
module.exports = router;

router.get('/', function(req, res) {
    res.render('pages/index');
});

router.get('/about', function(req, res){
    var users = [
        { name: 'Pablo', email: 'pablo@mail.ru', avatar: 'http://placekitten.com/200/200' },
        { name: 'Eric', email: 'eric@mail.ru', avatar: 'http://placekitten.com/300/300' },
        { name: 'Max', email: 'max@mail.ru', avatar: 'http://placekitten.com/400/400' },
        { name: 'Tilda', email: 'tilda@mail.ru', avatar: 'http://placekitten.com/500/500' },

    ];
    res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res){
    res.render('pages/contact');
});

router.post('/contact', function(req,res){
    res.send('Thank,'+ req.body.name +'!');
});