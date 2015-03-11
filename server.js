var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var OAuth   = require('oauth-1.0a');
var cors = require('cors');

var apiKeys = require(__dirname + '/_apiKeys.js');
var apiCalls = require('./server/apiCalls.js');



app.use(express.static(__dirname + '/app'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
// app.get('/api/list', function(req, res){
  
//   ;
// })
app.get('*', function(req, res) {
        res.sendfile('./app/index.html');
    });

app.listen(8080);
console.log('App listening on port 8080')

// $scope.yelpSearch = function(name){
//   $http.get("http://api.yelp.com/v2/search?term=" + name + "&location=94102&cll=37.783624,-122.408999&limit=10&category_filter=restaurants&callback=datacb"
//   ).then(function(data){
//     console.log(data);
//   })
// }