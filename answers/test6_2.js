var filterFiles = require('./test6_1.js');

filterFiles(process.argv[2], process.argv[3], function(err, files) {
	if(err) {
		return console.log(err);
	}
	files.forEach(file => {
		console.log(file);
	})
})