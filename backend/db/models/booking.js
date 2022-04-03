"use strict";
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      carId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Booking.associate = function (models) {
    Booking.belongsTo(models.Car, { foreignKey: "carId" });
    Booking.belongsTo(models.User, { foreignKey: "UserId" });
  };
  return Booking;
};
