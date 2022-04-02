"use strict";
const data = require("../../assests/json/cardatatable.json");
const results = [];

data.transmissons.forEach((ele) => {
  results.push({ name: ele });
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Transmissons", results, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Transmissons", null, {});
  },
};
