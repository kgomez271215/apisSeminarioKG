const { Model, DataTypes, Sequelize } = require('sequelize');

const SERVICIOS_TABLE = 'servicios';

const ServiciosSchema = {
  idServicio: {
    field: 'id_servicio',
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  servicio: {
    allowNull: false,
    type: DataTypes.STRING
  },
  descripcion: {
    allowNull: true,
    type: DataTypes.STRING
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW
  }

}

class Servicios extends Model {
  static associate() {

  };

  static config(sequelize) {
    return {
      sequelize,
      tableName: SERVICIOS_TABLE,
      modelName: 'Servicios',
      timestamps: false
    }
  }
}

module.exports = { SERVICIOS_TABLE, ServiciosSchema, Servicios }
