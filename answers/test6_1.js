var fs = require('fs');
var path = require('path');

module.exports = function (dirname, extname, callback) {
	fs.readdir(dirname, function (err, list) {
		var files = [];
		if (err) {
			return callback(err);
		}

		list.forEach(item => {
			if(path.extname(item).replace('.', '') === extname) {
				files.push(item);
			}
		})

		callback(null, files);
	})
}

