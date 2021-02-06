const Sequelize = require("sequelize");
const db = require('../db');

const Products = db.define('products', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true
  },
  value: {
    type: Sequelize.DECIMAL(),
    allowNull: false
  },
});

module.exports = Products;
