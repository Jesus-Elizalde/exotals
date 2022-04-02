'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transmisson = sequelize.define('Transmisson', {
    name: DataTypes.STRING
  }, {});
  Transmisson.associate = function(models) {
    // associations can be defined here
  };
  return Transmisson;
};