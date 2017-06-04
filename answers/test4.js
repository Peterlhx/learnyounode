var fs = require('fs')
var filename = process.argv[2];

var content = fs.readFile(filename, 'utf-8', function (err, data) {
	if(err) {
		return console.log(err);
	}
	console.log(data.split('\n').length - 1);
});
