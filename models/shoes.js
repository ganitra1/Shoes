'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Shoes.belongsTo(models.User, { foreignKey: "userId" });
    }
  };

  
  Shoes.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    brand: DataTypes.STRING,
    color: DataTypes.STRING,
    color_2: DataTypes.STRING,
    heel_heigth: DataTypes.STRING,
    season: DataTypes.STRING,
    userId:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Shoes',
  });
  return Shoes;
};