var http = require('http');
var url = process.argv[2];

http.get(url, function (res) {
	res.setEncoding('utf-8');
	res.on('data', function (chunk) {
		console.log(chunk)
	});
	res.on('error', function (error) {
		console.log(error);
	})
})