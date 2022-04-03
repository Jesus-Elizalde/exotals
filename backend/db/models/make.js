"use strict";
module.exports = (sequelize, DataTypes) => {
  const Make = sequelize.define(
    "Make",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Make.associate = function (models) {
    // associations can be defined here
    Make.hasMany(models.Model, { foreignKey: "makeId" });
  };
  return Make;
};
