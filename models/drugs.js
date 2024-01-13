const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Drugs = sequelize.define(
  "drug",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    price_inam: {
      type: DataTypes.FLOAT,
    },
    shape: {
      type: DataTypes.TEXT,
    },
    quantity: {
      type: DataTypes.TEXT,
    },
    dosage: {
      type: DataTypes.TEXT,
    },
    therapy: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

try {
  const initDatabase = async () => {
    await Drugs.sync({ alter: true });
    console.log("Database correctly initialised !");
  };
  //initDatabase();
} catch (error) {
  console.log("Error when initialising the database");
  console.log(error);
}

module.exports = Drugs;
