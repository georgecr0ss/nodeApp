// proper way to use http module -- Sam Aritoli
// var http = require('http');

// http.createServer(function(req, res) {
// 	res.writeHead(200, {
// 		'Content-Type': 'text/plain'
// 	});
// 	res.end('Hello world \n');
// }).listen(3000, '127.0.0.1');
// console.log('Server running on port 3000');

//express declaration
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');
	
mongoose.connect('mongodb://localhost/cats');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var cats = require('./routes/cats.js')(app);
 
var server = app.listen(3000, function() {
	console.log('Cats server running on port 3000');
})