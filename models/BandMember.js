'use strict';
const {
  Model
} = require('sequelize');
const User = require('./User');
module.exports = (sequelize, DataTypes) => {
  class BandMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.BandMember.belongsToMany(models.User, {
        as: 'userBand',
        through: 'UserSave',
        foreignKey: 'id',
        otherKey: 'id',
      });

    }
  }
  BandMember.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    image: DataTypes.STRING,
    archetype: DataTypes.STRING,
    archetypeDes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BandMember',
  });
  return BandMember;
};