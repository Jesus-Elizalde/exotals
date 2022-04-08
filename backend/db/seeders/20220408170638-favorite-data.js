"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Favorites",
      [
        {
          userId: 1,
          carId: 2,
        },
        {
          userId: 1,
          carId: 1,
        },
        {
          userId: 1,
          carId: 4,
        },
        {
          userId: 1,
          carId: 6,
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
    return queryInterface.bulkDelete("Favorites", null, {});
  },
};
