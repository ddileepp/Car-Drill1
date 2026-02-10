function problem5(inventory, year) {
  return inventory.filter(car => car.car_year < year);
}

module.exports = problem5;

