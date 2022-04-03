"use strict";
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Model",
    {
      name: DataTypes.STRING,
      makeId: DataTypes.INTEGER,
    },
    {}
  );
  Model.associate = function (models) {
    // associations can be defined here
    Model.belongsTo(models.Make, { foreignKey: "makeId" });
    Model.hasMany(models.Car, { foreignKey: "modelId" });
  };
  return Model;
};
