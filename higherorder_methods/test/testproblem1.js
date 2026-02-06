const inventory = require('../Inventory');
const problem1 = require('../problem1');
const car = problem1(inventory, 33);
console.log(`Car 33 is a ${car.car_year} ${car.car_make} ${car.car_model}`);
