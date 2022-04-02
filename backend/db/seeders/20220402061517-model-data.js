"use strict";
const data = require("../../assests/json/makesandmodelsdb.json");
const results = [];

data.Models.forEach((ele) => {
  results.push({
    name: ele.model,
    makeId: ele.modelId + 1,
  });
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Models", results, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Models", null, {});
  },
};
