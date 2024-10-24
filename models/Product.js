// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false, // Ensures that the product name is required
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Decimal type with precision (10 digits total, 2 after the decimal)
      allowNull: false,
      validate: {
        isDecimal: true, // Ensures the price is a valid decimal number
      },
    },
    stockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10, // Sets the default stock quantity to 10
      validate: {
        isNumeric: true, // Ensures that the stock quantity is numeric
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Allows products to be uncategorized
      references: {
        model: 'category', // Foreign key referencing the 'category' model
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
