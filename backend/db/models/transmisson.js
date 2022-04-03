"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transmisson = sequelize.define(
    "Transmisson",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Transmisson.associate = function (models) {
    Transmisson.hasMany(models.Car, { foreignKey: "transmissonId" });
  };
  return Transmisson;
};
