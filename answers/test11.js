var http = require('http');
var fs = require('fs');

var port = Number(process.argv[2]);
var path = process.argv[3];

var readStream = fs.createReadStream(path);

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	readStream.pipe(res);
}).listen(port);

/* 官方答案
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
*/