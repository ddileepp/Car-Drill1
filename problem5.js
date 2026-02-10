function problem5(inventory) {
  let olderCars = [];
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].car_year < 2000) {
      olderCars[olderCars.length] = inventory[i]; // push manually
    }
  }
  return olderCars;
}

module.exports = problem5;



