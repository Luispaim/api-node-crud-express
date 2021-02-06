const Sequelize = require("sequelize");
const db = require('../db');

const Buyers = db.define('buyers', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: false,
    unique: true
  },
});

module.exports = Buyers;
