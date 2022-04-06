'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class check extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  check.init({
    date: DataTypes.DATE,
    price: DataTypes.FLOAT,
    id_client: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'check',
  });
  return check;
};