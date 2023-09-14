'use strict';
const {
  Model
} = require('sequelize');
const BandMember = require("./bandmember")
const User = require('./User');
module.exports = (sequelize, DataTypes) => {
  class UserSave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.User.belongsToMany(models.BandMember, {
        through: 'UserSave',
        foreignKey: 'id',
        otherKey: 'id',
      });
      models.BandMember.belongsToMany(models.User, {
        through: 'UserSave',
        foreignKey: 'id',
        otherKey: 'id',
      });

    }
  }
  UserSave.init({
    bandName: {
      type: DataTypes.STRING
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      }
    },
    bandMemberID: {
      type: DataTypes.INTEGER,
      references: {
        model: BandMember,
        key: "id",
      }
    },
    money: DataTypes.INTEGER,
    cred: DataTypes.INTEGER,
    members: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserSave',
  });
  return UserSave;
};