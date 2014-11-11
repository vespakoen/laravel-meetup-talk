var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Transfer-Encoding', 'chunked');

  fs.createReadStream(__dirname + '/data.json')
    .pipe(res);
});

server.listen(8080);
