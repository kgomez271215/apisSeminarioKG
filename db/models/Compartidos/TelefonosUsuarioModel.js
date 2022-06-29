const {Model, DataTypes, Sequelize} = require('sequelize');
const {USUARIOS_TABLE} = require('./UsuariosModel');

const TELEFONOSUSUARIO_TABLE = 'telefonosusuario';

const TelefonosUsuarioSchema = {
  idTelefonoUsuario:{
    field: 'id_telefono_usuario',
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  prefijo:{
    allowNull: false,
    type: DataTypes.INTEGER
  },
  telefono: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  idTipoTelefono: {
    field: 'id_tipo_telefono',
    allowNull: false,
    type: DataTypes.INTEGER
  },
  idUser: {
    field: 'id_user',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USUARIOS_TABLE,
      key: 'id_user'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  estado:{
    allowNull: false,
    type: DataTypes.INTEGER,
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

class TelefonosUsuario extends Model {
  static associate(models){
    this.belongsTo(models.Usuarios, { foreignKey: 'idUser', as: 'TelefonoUsuario' });
  };

  static config(sequelize){
    return {
      sequelize,
      tableName: TELEFONOSUSUARIO_TABLE,
      modelName: 'TelefonosUsuario',
      timestamps: false
    }
  }
}

module.exports = {TELEFONOSUSUARIO_TABLE, TelefonosUsuarioSchema, TelefonosUsuario}
