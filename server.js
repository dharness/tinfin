// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var http = require('http').Server(app)
var io = require('socket.io')(http)
var path = require('path')
var MongoClient = require('mongodb').MongoClient


express.static.mime.define({
	'application/vnd.unity': ['unity3d'],
});


// DATBASE CRUMS ======================================

MongoClient.connect('mongodb://master:master@ds043329.mongolab.com:43329/tinderroyale', function(err, db) {
	if (err) throw err;
	console.log("Connected to Database");
	_db = db //this is our global database object
})
var clients = []
	// THE SOCKET POCKET -- WELCOME ======================================

io.on('connection', function(socket) {

	console.log('a user connected');


	socket.on('click', function(msg) {
		console.log(msg);
	});

	clients.push(socket);
	if (clients.length >= 1) {
		io.emit('full', 'emit')
	}


});

http.listen(8080, function() {
	console.log('listening on *:3000');
});



app.use(bodyParser.json()) // get information from html forms
app.use(bodyParser.urlencoded({
	extended: true
}))
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))



// routes ======================================================================
require('./app/routes.js')(app) // load our routes and pass in our app and fully configured passport

// launch ======================================================================
// app.listen(port)
console.log('The magic happens on port ' + port)