import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Crypto = sequelize.define(
  "crypto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
    },
    value: {
      type: DataTypes.FLOAT,
    },
    image: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  { timestamps: false }
);
