'use strict';


const {
  Model
} = require('sequelize');
const BandMember = require("./bandmember")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.User.belongsToMany(models.BandMember, {
        as: 'userBand',
        through: 'UserSave',
        foreignKey: 'id',
        otherKey: 'id',
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};