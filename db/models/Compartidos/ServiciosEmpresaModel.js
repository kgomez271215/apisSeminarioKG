const {Model, DataTypes, Sequelize} = require('sequelize');
const {EMPRESAS_TABLE} = require('./EmpresasModel');
const {SERVICIOS_TABLE} = require('./ServiciosModel');

const SERVICIOSEMPRESA_TABLE = 'serviciosempresa';

const ServiciosEmpresaSchema = {
  idServicioEmpresa:{
    field: 'id_servicio_empresa',
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  idEmpresa: {
    field: 'id_empresa',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: EMPRESAS_TABLE,
      key: 'id_empresa'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idServicio: {
    field: 'id_servicio',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: SERVICIOS_TABLE,
      key: 'id_servicio'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  estado:{
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW
  }

}

class ServiciosEmpresa extends Model {
  static associate(){
  };

  static config(sequelize){
    return {
      sequelize,
      tableName: SERVICIOSEMPRESA_TABLE,
      modelName: 'ServiciosEmpresa',
      timestamps: false
    }
  }
}

module.exports = {SERVICIOSEMPRESA_TABLE, ServiciosEmpresaSchema, ServiciosEmpresa}
