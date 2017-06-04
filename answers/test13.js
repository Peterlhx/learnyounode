var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function (req, res) {
	var urlData = url.parse(req.url, true);
 	var date = '', dateObj = {};
	if (urlData.pathname === '/api/parsetime' && req.method.toLowerCase() === 'get') {
		date = new Date(urlData.search.split('?')[1].split('=')[1]);
		dateObj['hour'] = date.getHours();
		dateObj['minute'] = date.getMinutes();
		dateObj['second'] = date.getSeconds();
	} else if (urlData.pathname === '/api/unixtime' && req.method.toLowerCase() === 'get') {
		date = new Date(urlData.search.split('?')[1].split('=')[1]);
		dateObj['unixtime'] = date.getTime();
	}
	if (JSON.stringify(dateObj) !== '{}') {
		res.writeHead(200, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify(dateObj));
	} else {
		res.writeHead(404);
		res.end();
	}
}).listen(port);

/* 官方答案
var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
*/