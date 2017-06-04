var http = require('http');
var url = process.argv[2];

http.get(url, function (res) {
	let data = '';
	res.setEncoding('utf-8');
	res.on('data', function (chunk) {
		data += chunk;
	});
	res.on('error', function (error) {
		console.log(error);
	});
	res.on('end', function() {
		console.log(data.length);
		console.log(data);
	})
})

/* 官方答案
var http = require('http')
  var bl = require('bl')

  http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
      data = data.toString()
      console.log(data.length)
      console.log(data)
    }))
  })
*/