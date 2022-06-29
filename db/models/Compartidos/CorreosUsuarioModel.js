const {Model, DataTypes, Sequelize} = require('sequelize');
const {USUARIOS_TABLE} = require('./UsuariosModel');

const CORREOSUSUARIO_TABLE = 'correosusuario';

const CorreosUsuarioSchema = {
  idCorreoUsuario:{
    field: 'id_correo_usuario',
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  correo:{
    allowNull: false,
    type: DataTypes.STRING
  },
  idTipoCorreo: {
    field: 'id_tipo_correo',
    allowNull: false,
    type: DataTypes.INTEGER,
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

class CorreosUsuario extends Model {
  static associate(models){
    this.belongsTo(models.Usuarios, { foreignKey: 'idUser', as: 'CorreoUsuario' });
  };

  static config(sequelize){
    return {
      sequelize,
      tableName: CORREOSUSUARIO_TABLE,
      modelName: 'CorreosUsuario',
      timestamps: false
    }
  }
}

module.exports = {CORREOSUSUARIO_TABLE, CorreosUsuarioSchema, CorreosUsuario}
