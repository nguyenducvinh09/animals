function Bird() {
	this.stomach = [];
}
Bird.prototype.eat = function(cat) {
	//body
	this.stomach.push(cat);
};