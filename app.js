var express = require('express');

var app = express();

app.get('/', function(req, res, next){
    res.send("Hello Express!");
})

app.listen(3300, function(req, res){
    console.log('ready at 3300 port'); 
})

// var http = require('http');
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/plain'});
//     res.end('Hello World\n');
// }).listen(3300, '127.0.0.1');
// console.log('Server is running at http://127.0.0.1:3300/');