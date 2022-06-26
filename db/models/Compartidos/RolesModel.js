const {Model, DataTypes, Sequelize} = require('sequelize');

const ROLES_TABLE = 'roles';

const RolesSchema = {
  idRol:{
    field: 'id_rol',
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  rol:{
    allowNull: false,
    type: DataTypes.STRING
  },
  descripcion:{
    allowNull: false,
    type: DataTypes.STRING
  },
  estado:{
    allowNull: false,
    type: DataTypes.INTEGER
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

class Roles extends Model {
  static associate(models){
    this.hasOne(models.Usuarios,{as: 'UsuariosRoles',foreignKey: 'idRol'});
  };

  static config(sequelize){
    return {
      sequelize,
      tableName: ROLES_TABLE,
      modelName: 'Roles',
      timestamps: false
    }
  }
}

module.exports = {ROLES_TABLE, RolesSchema, Roles}
