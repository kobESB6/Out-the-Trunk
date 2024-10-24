const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,  // Automatically increments the ID for new entries
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',   // References the 'product' model
        key: 'id',          // The foreign key in the 'product' table
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',       // References the 'tag' model 
        key: 'id',          // The foreign key in the 'tag' table
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
