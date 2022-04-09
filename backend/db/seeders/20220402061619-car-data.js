"use strict";
const data = require("../../assests/json/makesandmodelsdb.json");
const cityData = require("../../assests/json/mega-car_dealers.json");

const cars = require("../../assests/json/cars.json");
const results = [];
// const colors = ["red", "yellow", "green", "blue", "purple", "grey"];
const price = [2500, 5000, 1000];
const user = [1, 2, 3, 4];

cars.forEach((ele, i) => {
  results.push({
    address: cityData[i].address1,
    city: cityData[i].city,
    state: cityData[i].state,
    country: cityData[i].country,
    description: ele.description,
    price: ele.price,
    color: ele.color,
    userId: user[Math.floor(Math.random() * user.length)],
    modelId: ele.modelId,
  });
});

// cityData.forEach((ele) => {
//   results.push({
//     address: ele.address1,
//     city: ele.city,
//     state: ele.state,
//     country: ele.country,
//     description: `During the late 20th and early 21st century cars increased in weight due to batteries,[55] modern steel safety cages, anti-lock brakes, airbags, and "more-powerful—if more-efficient—engines"[56] and, as of 2019, typically weigh between 1 and 3 tonnes.[57] Heavier cars are safer for the driver from a crash perspective, but more dangerous for other vehicles and road users.[56] The weight of a car influences fuel consumption and performance, with more weight resulting in increased fuel consumption and decreased performance. The SmartFortwo, a small city car, weighs 750–795 kg (1,655–1,755 lb). Heavier cars include full-size cars, SUVs and extended-length SUVs like the Suburban.`,
//     price: price[Math.floor(Math.random() * price.length)],
//     color: colors[Math.floor(Math.random() * colors.length)],
//     userId: user[Math.floor(Math.random() * user.length)],
//     modelId:
//       data.Models[Math.floor(Math.random() * data.Models.length)].modelId + 1,
//   });
// });

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
