const { DB_HOST, DB_NAME, DB_PORT, DB_PASSWORD, DB_USER } = require("./config");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  port: DB_PORT,
});

module.exports = sequelize;
