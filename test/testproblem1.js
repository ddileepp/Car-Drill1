const inventory = require('../Inventory.js');
const problem1 = require('../problem1.js');

const car = problem1(inventory);

if (!car) {
    console.log("Car with id 33 not found");
} else {
    console.log(`Car 33 is a ${car.car_year} ${car.car_make} ${car.car_model}`);
}

