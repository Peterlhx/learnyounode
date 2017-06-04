var http = require('http');
var urls = process.argv.slice(2);

function getData (urls, index) {
	http.get(urls[index], function (res) {
		let data = '';
		res.setEncoding('utf-8');
		res.on('data', function (chunk) {
			data += chunk;
		});
		res.on('end', function () {
			console.log(data);
			if(index < 3) {
				index++;
				getData(urls, index);
			}
		})
	})
}

getData(urls, 0);

/* 官方答案
var http = require('http')
  var bl = require('bl')
  var results = []
  var count = 0

  function printResults () {
    for (var i = 0; i < 3; i++) {
      console.log(results[i])
    }
  }

  function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }

        results[index] = data.toString()
        count++

        if (count === 3) {
          printResults()
        }
      }))
    })
  }

  for (var i = 0; i < 3; i++) {
    httpGet(i)
  }
*/