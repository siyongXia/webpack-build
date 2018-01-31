const fs = require('fs');
var data = fs.readFileSync('./HelloWorld.vue')
console.log(data);
for(var i = 0 ; i < 30; i++) {
	fs.writeFile(`hello${i}.vue`, data, function(err){
		if(err) {
			console.log(err);
		}
	});
}