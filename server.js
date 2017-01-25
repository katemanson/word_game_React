var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var parser = require('xml2json');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.post('/dictionary', function(req, res){
  var path = '/api/v1/references/scrabble/' + req.body.word + '?key=4.391078540068126e29';

  var callback = function(response){
    let data = '';

    response.on('data', function(chunk) {
      data += chunk
    });

    response.on('end', function() {
      data = parser.toJson(data);
      console.log(data)
      res.send(data);
    });
  }

  var options = {
    hostname: 'www.wordgamedictionary.com', 
    path: path,
  }

  http
    .get(options, callback)
    .end()
});

app.use(express.static(path.join(__dirname + '/client/build')));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
