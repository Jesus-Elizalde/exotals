"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          review: "John Doe",
          rating: 5,
          userId: 1,
          carId: 1,
        },
        {
          review: "John",
          rating: 5,
          userId: 3,
          carId: 1,
        },
        {
          review: "Doe",
          rating: 5,
          userId: 1,
          carId: 1,
        },
        {
          review: "John dsdsdsDoe",
          rating: 1,
          userId: 1,
          carId: 1,
        },
        {
          review: "John dsdsdsdsDoe",
          rating: 3,
          userId: 2,
          carId: 1,
        },
        {
          review: "John Doe",
          rating: 2,
          userId: 1,
          carId: 1,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("People", null, {});
  },
};
