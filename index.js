/* var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('num', 1);
var num = app.get('num');
console.log(num); //1

app.use(function (req, res, next) {
    console.log('Record timestamp');
    next();
});
app.use(bodyParser.json());

app.post('/calculator/rest/powery', function (req, res, next) {
    var body = req.body;
    var x = body.x;
    var y = body.y;
    var result = function(){
            var sum = 1;
            for(var i = 0; i < y-1; i++){
                if(i == 0){
                    sum = x;
                }
                sum *= x;
            }
            return sum;
        };
    var obj = {
        "x": x,
        "y": y,
        "result x power y": result()
    }
    res.json(obj);
});

app.post('/calculator/rest/squareroot', function (req, res, next) {
    var body = req.body;
    var x = body.x;
    var result = Math.sqrt(x);
    var obj = {
        "x" : x,
        "result squareroot x" : result
    }
    res.json(obj);
});

app.post('/calculator/rest/cmtoinch', function (req, res, next) {
    var body = req.body;
    var x = body.x;
    var result = x * 0.393700787;
    var obj = {
        "x" : x,
        "result cm to inch" : result
    }
    res.json(obj);
});

app.listen(3000); */


import express from './config/express';


process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3000;

var app = express();

app.listen(process.env.PORT, () => {
       console.log('Starting node.js on port ' + process.env.PORT);
});

module.exports = app;