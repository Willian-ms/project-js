import sequelize, { Sequelize } from "sequelize";
import db from "../db.js"


export default db.define("procedure", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  procedimento: {
    type: Sequelize.STRING,
    allowNull: false
  },
})