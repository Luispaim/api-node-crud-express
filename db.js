const Sequelize = require("sequelize");
const conn = new Sequelize("mysql://paim:password@localhost:3406/db");

module.exports = conn;
