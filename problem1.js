function problem1(inventory) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === 33) {
            return inventory[i];
        }
    }
    return null;
}

module.exports = problem1;

