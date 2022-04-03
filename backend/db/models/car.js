"use strict";
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define(
    "Car",
    {
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      color: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      modelId: DataTypes.INTEGER,
      transmissonId: DataTypes.INTEGER,
      cylinderId: DataTypes.INTEGER,
      seatId: DataTypes.INTEGER,
      drivetrainId: DataTypes.INTEGER,
    },
    {}
  );
  Car.associate = function (models) {
    // associations can be defined here
  };
  return Car;
};
