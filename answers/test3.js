var fs = require('fs')
var filename = process.argv[2];

var content = fs.readFileSync(filename);

content = content.toString('utf-8').substring(0, content.lastIndexOf('\n'));

console.log(content.split('\n').length)
