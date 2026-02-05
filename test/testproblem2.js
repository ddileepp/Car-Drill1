const Inventory= require('../Inventory.js');
const problem2= require('../problem2.js');

const lastCar= problem2(Inventory);

console.log(`The last car is a ${lastCar.car_year} ${lastCar.car_make} ${lastCar.car_model}`);