"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Cars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(1000, 2),
      },
      color: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      modelId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Models" },
      },
      transmissonId: {
        type: Sequelize.INTEGER,
        references: { model: "Transmissons" },
      },
      cylinderId: {
        type: Sequelize.INTEGER,
        references: { model: "Cylinders" },
      },
      seatId: {
        type: Sequelize.INTEGER,
        references: { model: "Seats" },
      },
      drivetrainId: {
        type: Sequelize.INTEGER,
        references: { model: "Drivetrains" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Cars");
  },
};