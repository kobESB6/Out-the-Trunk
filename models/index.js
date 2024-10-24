// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id', // The foreign key in the Product table
  onDelete: 'CASCADE',       // If a Category is deleted, its Products are also deleted
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,       // Join table to connect Products and Tags
  foreignKey: 'product_id',  // The foreign key in the ProductTag join table
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,       // Join table to connect Tags and Products
  foreignKey: 'tag_id',      // The foreign key in the ProductTag join table
});
  module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
