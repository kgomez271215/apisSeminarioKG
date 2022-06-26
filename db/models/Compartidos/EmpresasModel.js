const {Model, DataTypes, Sequelize} = require('sequelize');

const EMPRESAS_TABLE = 'empresas';

const EmpresasSchema = {
  idEmpresa:{
    field: 'id_empresa',
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  empresa:{
    allowNull: false,
    type: DataTypes.STRING
  },
  descripcion:{
    allowNull: false,
    type: DataTypes.STRING
  },
  vision:{
    allowNull: true,
    type: DataTypes.STRING
  },
  mision:{
    allowNull: true,
    type: DataTypes.STRING
  },
  logo:{
    allowNull: true,
    type: DataTypes.STRING
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

class Empresas extends Model {
  static associate(models){
    this.hasOne(models.Usuarios,{as: 'UsuariosEmpresa',foreignKey: 'idEmpresa'});
    this.hasMany(models.Sedes,{as: 'SedesEmpresa',foreignKey: 'idEmpresa'});
    this.belongsToMany(models.Servicios,{
      as: 'EmpresaServicios',
      through: models.ServiciosEmpresa,
      foreignKey: 'idEmpresa',
      otherKey: 'idServicio'
    })
  };

  static config(sequelize){
    return {
      sequelize,
      tableName: EMPRESAS_TABLE,
      modelName: 'Empresas',
      timestamps: false
    }
  }
}

module.exports = {EMPRESAS_TABLE, EmpresasSchema, Empresas}
