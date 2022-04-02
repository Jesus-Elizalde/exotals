"use strict";
const data = require("../../assests/json/cardatatable.json");
const results = [];

data.Cylinders.forEach((ele) => {
  results.push({ name: ele });
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert("Cylinders", results, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Cylinders", null, {});
  },
};
