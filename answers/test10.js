var net = require('net');
var port = process.argv[2];

var server = net.createServer(function (socket) {
	socket.end(showTime() + '\n');
}).listen(port);

function showTime () {
	var date = new Date();
	return date.getFullYear() + '-' +
		zeroFill(date.getMonth() + 1) + '-' +
		zeroFill(date.getDate()) + ' ' +
		zeroFill(date.getHours()) + ':' +
		zeroFill(date.getMinutes());

}

function zeroFill (num) {
	return (num < 10 ? '0' + num : num)
}