import sequelize, { Sequelize } from "sequelize";
import db from "../db.js"


export default db.define("client", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cpf:{
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  rg:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  nascimento:{
    type: Sequelize.STRING,
  },
})