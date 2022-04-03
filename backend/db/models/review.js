"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      review: DataTypes.TEXT,
      rating: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      carId: DataTypes.INTEGER,
    },
    {}
  );
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "userId" });
    Review.belongsTo(models.Car, { foreignKey: "carId" });
  };
  return Review;
};
