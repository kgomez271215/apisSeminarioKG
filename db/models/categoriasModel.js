const {Model, DataTypes, Sequelize} = require('sequelize');

const CATEGORIA_TABLE = 'categorias';

const CategoriaSchema = {
  idCategoria:{
    field: 'id_categoria',
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  categoria:{
    allowNull: false,
    type: DataTypes.STRING
  },
  descripcion:{
    allowNull: true,
    type: DataTypes.STRING
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }

}

class Categoria extends Model {
  static associate(){
  };

  static config(sequelize){
    return {
      sequelize,
      tableName: CATEGORIA_TABLE,
      modelName: 'Categoria',
      timestamps: false
    }
  }
}

module.exports = {CATEGORIA_TABLE, CategoriaSchema, Categoria}
