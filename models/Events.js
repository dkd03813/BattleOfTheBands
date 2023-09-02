'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Events.init({
    eventName: DataTypes.STRING,
    eventDetails: DataTypes.STRING,
    eventResult: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Events',
  });
  return Events;
};