"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cylinder = sequelize.define(
    "Cylinder",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Cylinder.associate = function (models) {
    // associations can be defined here
    Cylinder.hasMany(models.Car, { foreignKey: "cylinderId" });
  };
  return Cylinder;
};
