let drinkQueue = [];
let drinkList = [];

// TODO: persist queue to disk

const updateDrinkList = (list) => {
  drinkList = list;
};

const getDrinkList = () => drinkList;

const addDrinkOrder = (drink) => drinkQueue.push(drink);

const getDrinkQueue = () => drinkQueue;

const removeDrinkOrder = (id) => {
  drinkQueue = drinkQueue.filter((drink) => drink.id !== id);
};

module.exports = {
  addDrinkOrder,
  getDrinkQueue,
  removeDrinkOrder,
  updateDrinkList,
  getDrinkList,
};
