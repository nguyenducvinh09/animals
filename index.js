var Bird = require('./bird');
var Cat =require('./cat');
var Mouse = require('./Mouse');
var bird1 = new Bird('penguins');
var cat1 = new Cat('tom');
var mouse1 = new Mouse('jerry');
cat1.eat(mouse1);
console.log(cat1);
try {
	cat1.eat(bird1);
}catch(Error){
	console.log('Error while cat eat a bird');
}

bird1.sayHi();