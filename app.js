// Part 1
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};
// find sword
// console.log(adventurer.inventory[0]);

// create a loop that logs each inventory item
// adventurer.inventory.forEach((element) => {
//   console.log(element);
// });
// same loop code as above
// for (let i = 0; i < adventurer.inventory.length; i++) {
//   console.log(adventurer.inventory[i]);
// }

// add a companion for robin
// adventurer.companion = {
//   name: "Leo",
//   type: "Cat",
// };

// add a companion for the companion "Leo"
adventurer.companion.companion = {
  name: "Frank",
  type: "Flea",
  inventory: ["small hat", "sunglasses"],
};

adventurer.roll();
// console.log(adventurer);
