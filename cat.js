var Mouse = require('./Mouse');
function Cat(name) {
	this.stomach = [];
}
Cat.prototype.eat = function(animal) {
	// body...
	if(animal instanceof Mouse) {
		this.stomach.push(animal);
	}else {
		throw new Error('Cat can only eat mouse!');
	}
	
};
module.exports =Cat;