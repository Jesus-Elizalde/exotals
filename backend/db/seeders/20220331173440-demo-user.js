"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-User",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "demo2@user.io",
          username: "Demo-User2",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "demo3@user.io",
          username: "Demo-User3",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "jesus@user.io",
          username: "Chuyy",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["Demo-User", "Demo-User2", "Demo-User3"] },
      },
      {}
    );
  },
};
