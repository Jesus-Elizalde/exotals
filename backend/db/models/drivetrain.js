"use strict";
module.exports = (sequelize, DataTypes) => {
  const Drivetrain = sequelize.define(
    "Drivetrain",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Drivetrain.associate = function (models) {
    // associations can be defined here
    Drivetrain.hasMany(models.Car, { foreignKey: "drivetrainId" });
  };
  return Drivetrain;
};
