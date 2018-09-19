var chalk = require('chalk');
function Bird(name) {
	this.name = name;
	this.stomach = [];
}
Bird.prototype.sayHi = function() {
	console.log('Hi ! My name is Bird: ' + chalk.blue(this.name))
}
Bird.prototype.eat = function(cat) {
	//body
	this.stomach.push(cat);
};
module.exports = Bird;