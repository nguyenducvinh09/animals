function Bird() {
	this.stomach = [];
}
Bird.prototype.eat = function(cat) {
	this.stomach.push(cat);
};