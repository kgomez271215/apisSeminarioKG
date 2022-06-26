const { Model, DataTypes, Sequelize } = require('sequelize');
const {EMPRESAS_TABLE} = require('./EmpresasModel');
const {TIPOSEDES_TABLE} = require('./TipoSedesModel');

const SEDES_TABLE = 'sedes';

const SedesSchema = {
  idSede: {
    field: 'id_sede',
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  sede: {
    allowNull: false,
    type: DataTypes.STRING
  },
  descripcion: {
    allowNull: true,
    type: DataTypes.STRING
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
  idTipoSede: {
    field: 'id_tipo_sede',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: TIPOSEDES_TABLE,
      key: 'id_tipo_sede'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  estado: {
    allowNull: false,
    type: DataTypes.INTEGER,
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

class Sedes extends Model {
  static associate(models) {
    this.belongsTo(models.Empresas, { foreignKey: 'idEmpresa', as:'Empresa' });
    this.belongsTo(models.TipoSedes, { foreignKey: 'idTipoSede', as:'Tipo' });
  };

  static config(sequelize) {
    return {
      sequelize,
      tableName: SEDES_TABLE,
      modelName: 'Sedes',
      timestamps: false
    }
  }
}

module.exports = { SEDES_TABLE, SedesSchema, Sedes }
