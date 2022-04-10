"use strict";
const cars = require("../../assests/json/cars.json");

const results = [];

for (let i = 0; i < cars.length; i++) {
  for (let j = 0; j < cars[i].images.length; j++) {
    results.push({
      url: cars[i].images[j],
      carId: i + 1,
    });
  }
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert("Images", results, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Images", null, {});
  },
};
