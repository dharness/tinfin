// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var http = require('http');
var http = require('http').Server(app);
var io = require('socket.io')(http);
path = require('path');
var MongoClient = require('mongodb').MongoClient;


express.static.mime.define({
   'application/vnd.unity': ['unity3d'],
 });


// DATBASE CRUMS ======================================

MongoClient.connect('mongodb://stain_db_user:bluecakes@ds031611.mongolab.com:31611/stain_db', function(err, db) {
    if (err) throw err;
    console.log("Connected to Database");
    _db = db //this is our global database object
})

// THE SOCKET POCKET -- WELCOME ======================================

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
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
app.listen(port)
console.log('The magic happens on port ' + port)