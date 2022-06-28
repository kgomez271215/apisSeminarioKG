const {Model, DataTypes, Sequelize} = require('sequelize');
const {EMPRESAS_TABLE} = require('./EmpresasModel');
const {ROLES_TABLE} = require('./RolesModel');

const USUARIOS_TABLE = 'usuarios_tgt';

const UsuariosSchema = {
  idUser:{
    field: 'id_user',
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email:{
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  passwd:{
    allowNull: false,
    type: DataTypes.STRING
  },
  idRol: {
    field: 'id_rol',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ROLES_TABLE,
      key: 'id_rol'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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
  estado:{
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 1
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

class Usuarios extends Model {
  static associate(models){
    this.hasOne(models.DatosUsuario,{as: 'Datos',foreignKey: 'idUser'});
    this.hasOne(models.CorreosUsuario,{as: 'Correo',foreignKey: 'idUser'});
    this.hasOne(models.TelefonosUsuario,{as: 'Telefono',foreignKey: 'idUser'});

    this.belongsTo(models.Empresas, { foreignKey: 'idEmpresa', as:'Empresa' });
    this.belongsTo(models.Roles, { foreignKey: 'idRol', as:'Rol' });
  };

  static config(sequelize){
    return {
      sequelize,
      tableName: USUARIOS_TABLE,
      modelName: 'Usuarios',
      timestamps: false
    }
  }
}

module.exports = {USUARIOS_TABLE, UsuariosSchema, Usuarios}
