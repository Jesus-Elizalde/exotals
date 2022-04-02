"use strict";
const data = require("../../assests/json/cardatatable.json");
const results = [];

data.Drivetrain.forEach((ele) => {
  results.push({ name: ele });
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert("Drivetrains", results, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Drivetrains", null, {});
  },
};
