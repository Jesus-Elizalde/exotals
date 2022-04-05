"use strict";
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      url: DataTypes.STRING,
      carId: DataTypes.INTEGER,
    },
    {}
  );
  Image.associate = function (models) {
    // associations can be defined here
    Image.belongsTo(models.Car, {
      foreignKey: "carId",
    });
  };
  return Image;
};
