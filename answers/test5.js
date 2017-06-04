var fs = require('fs');
var path = require('path');

var pathname = process.argv[2];
var extname = process.argv[3];

fs.readdir(pathname, function (err, list) {
	if (err) {
		return console.log(err);
	}

	list.forEach(item => {
		if(path.extname(item).replace('.', '') === extname) {
			console.log(item)
		}
	})
})