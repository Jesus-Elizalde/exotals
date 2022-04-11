"use strict";
const cars = require("../../assests/json/cars.json");
const reviews = [
  { rating: 5, review: "This was a great experience!" },
  {
    rating: 4,
    review:
      "Drive was great car was a bit stiff and clunky with the transmisson but in speed it is wonderful",
  },
  { rating: 2, review: "This takes a lot of gas never again" },
  {
    rating: 5,
    review:
      "The paint color is mesmerizing, I could stare at this the whole day",
  },
  { rating: 5, review: "Car's interior is to die for!" },
  { rating: 5, review: "Worth every peny!!!" },
];
const user = [1, 2, 3, 4];

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const results = [];

for (let j = 0; j < cars.length; j++) {
  for (let i = 0; i < randomNumber(2, reviews.length); i++) {
    results.push({
      review: reviews[i].review,
      rating: reviews[i].rating,
      userId: user[Math.floor(Math.random() * user.length)],
      carId: j + 1,
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
    return queryInterface.bulkInsert("Reviews", results, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
