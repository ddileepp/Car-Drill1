function problem3(inventory) {
  return inventory
    .map(car => car.car_model)
    .sort();
}

module.exports = problem3;

