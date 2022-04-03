"use strict";
module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define(
    "Seat",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Seat.associate = function (models) {
    Seat.hasMany(models.Car, { foreignKey: "seatId" });
  };
  return Seat;
};
