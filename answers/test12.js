var http = require('http');
var port = process.argv[2];

var server = http.createServer(function (req, res) {
	var data = '';
	if(req.method.toLowerCase() === 'post') {
		req.setEncoding('utf-8');
		req.on('data', function(chunk) {
			data += chunk;
		});
		req.on('end', function() {
			res.end(data.toUpperCase());
		})
	}
}).listen(port);

/* 官方答案
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('send me a POST\n')
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
*/