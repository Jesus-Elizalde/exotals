"use strict";
const data = require("../../assests/json/makesandmodelsdb.json");
const cityData = require("../../assests/json/mega-car_dealers.json");
const results = [];
const colors = ["red", "yellow", "green", "blue", "purple", "grey"];
const price = [2500, 5000, 1000];
const user = [1, 2, 3, 4];

cityData.forEach((ele) => {
  results.push({
    address: ele.address1,
    city: ele.city,
    state: ele.state,
    country: ele.country,
    price: price[Math.floor(Math.random() * price.length)],
    color: colors[Math.floor(Math.random() * colors.length)],
    userId: user[Math.floor(Math.random() * user.length)],
    modelId:
      data.Models[Math.floor(Math.random() * data.Models.length)].modelId + 1,
  });
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert("Cars", results, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Cars", null, {});
  },
};
