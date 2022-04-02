'use strict';
module.exports = (sequelize, DataTypes) => {
  const Seat = sequelize.define('Seat', {
    name: DataTypes.STRING
  }, {});
  Seat.associate = function(models) {
    // associations can be defined here
  };
  return Seat;
};