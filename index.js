var Bird = require('./bird');
var Cat =require('./cat');
var Mouse = require('./Mouse');
var bird1 = new Bird('penguins');
var cat1 = new Cat('tom');
var mouse1 = new Mouse('jerry');
cat1.eat(mouse1);
console.log(cat1);

bird1.sayHi();