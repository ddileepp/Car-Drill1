const problem2 = require('../problem2');
const inventory = require('../Inventory');   
const lastCar = problem2(inventory);
console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);
