const { DataTypes } = require("sequelize")
const db = require('../db');
const Products = require('../products/models')
const Buyers = require('../buyers/models')

const Types = db.define('types', {
  buyerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Buyers,
      key: 'id'
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Products,
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING(255)
  }
})

Products.belongsToMany(Buyers, { through: Types })
Buyers.belongsToMany(Products, { through: Types })
