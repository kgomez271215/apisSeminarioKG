const { Model, DataTypes, Sequelize } = require('sequelize');
const {USUARIOS_TABLE} = require('./UsuariosModel');

const DATOSUSUARIO_TABLE = 'datosUsuario';

const DatosUsuarioSchema = {
  idDatosUsuario: {
    field: 'id_datos_usuario',
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombres: {
    allowNull: false,
    type: DataTypes.STRING
  },
  apellidos: {
    allowNull: false,
    type: DataTypes.STRING
  },
  fNacimiento: {
    allowNull: true,
    type: DataTypes.DATE
  },
  genero: {
    allowNull: true,
    type: DataTypes.STRING
  },
  idUser: {
    field: 'id_user',
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
    references: {
      model: USUARIOS_TABLE,
      key: 'id_user'
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

class DatosUsuario extends Model {
  static associate(models) {
    this.belongsTo(models.Usuarios, { foreignKey: 'idUser', as: 'Usuario' });
  };

  static config(sequelize) {
    return {
      sequelize,
      tableName: DATOSUSUARIO_TABLE,
      modelName: 'DatosUsuario',
      timestamps: false
    }
  }
}

module.exports = { DATOSUSUARIO_TABLE, DatosUsuarioSchema, DatosUsuario }
