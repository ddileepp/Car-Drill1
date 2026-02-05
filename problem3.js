function problem3(inventory) {
  let models = [];


  for (let i = 0; i < inventory.length; i++) {
    models.push(inventory[i].car_model);
  }

  for (let i = 0; i < models.length - 1; i++) {
    for (let j = 0; j < models.length - i - 1; j++) {
      if (models[j] > models[j + 1]) {
        let temp = models[j];
        models[j] = models[j + 1];
        models[j + 1] = temp;
      }
    }
  }

  return models;
}

module.exports = problem3;
