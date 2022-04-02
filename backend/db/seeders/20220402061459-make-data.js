"use strict";
const data = require("../../assests/json/makesandmodelsdb.json");
const results = [];

data.Makes.forEach((ele) => {
  results.push({
    name: ele,
  });
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Makes", results, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Makes", null, {});
  },
};
