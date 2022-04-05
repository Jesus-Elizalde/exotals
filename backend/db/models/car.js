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
      description: DataTypes.TEXT,
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
    Car.hasMany(models.Image, {
      foreignKey: "carId",
      hooks: true,
      onDelete: "cascade",
    });
    Car.hasMany(models.Booking, { foreignKey: "carId" });
    Car.hasMany(models.Review, { foreignKey: "carId" });
    Car.belongsTo(models.User, { foreignKey: "userId" });
    Car.belongsTo(models.Model, { foreignKey: "modelId" });
    Car.belongsTo(models.Transmisson, { foreignKey: "transmissonId" });
    Car.belongsTo(models.Cylinder, { foreignKey: "cylinderId" });
    Car.belongsTo(models.Seat, { foreignKey: "seatId" });
    Car.belongsTo(models.Drivetrain, { foreignKey: "drivetrainId" });
  };
  return Car;
};
