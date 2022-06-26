const { Model, DataTypes, Sequelize } = require('sequelize');

const TIPOSEDES_TABLE = 'tipoSede';

const TipoSedesSchema = {
  idTipoSede: {
    field: 'id_tipo_sede',
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  tipoSede: {
    allowNull: false,
    type: DataTypes.STRING
  },
  descripcion: {
    allowNull: true,
    type: DataTypes.STRING
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

class TipoSedes extends Model {
  static associate(models) {
    this.hasMany(models.Sedes,{as: 'SedesTipo',foreignKey: 'idTipoSede'});
  };

  static config(sequelize) {
    return {
      sequelize,
      tableName: TIPOSEDES_TABLE,
      modelName: 'TipoSedes',
      timestamps: false
    }
  }
}

module.exports = { TIPOSEDES_TABLE, TipoSedesSchema, TipoSedes }
