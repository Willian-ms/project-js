import { DataTypes, Model } from 'sequelize';
import db from '../db.js'; // Importe a instância do Sequelize e a configuração do banco de dados

import client from './clientsModel.js';
import procedure from './procedureModel.js'

class Service extends Model {}

Service.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    valor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    forma_pagamento: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'Service',
  }
);

// Defina a associação belongsTo com o modelo Cliente
Service.belongsTo(client, { foreignKey: 'clientId' });
Service.belongsTo(procedure, {foreignKey: 'procedureId' })


export default Service;
