var args = process.argv;
var nums = args.slice(2);
var result = 0;

nums.forEach(item => {
	item = +item;
	if (! isNaN(item)) {
		result += item;
	}
})

console.log(result);