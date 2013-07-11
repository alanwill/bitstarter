var express = require('express');
var fs = require("fs");

var app = express.createServer(express.logger());

var buffer = new Buffer(16);

fs.readFile('index.html', "utf-8", function (err, data) {
  if (err) throw err;
  response.send(data.toString());
});

buffer.toString('utf-8');

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
