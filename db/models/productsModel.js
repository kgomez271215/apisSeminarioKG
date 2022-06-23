const { Model, DataTypes, Sequelize } = require('sequelize');
const { CATEGORIA_TABLE } = require('./categoriasModel');
const PRODUCTO_TABLE = 'productos';

const ProductoSchema = {
  idProducto: {
    field: 'id_producto',
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  producto: {
    allowNull: false,
    type: DataTypes.STRING
  },
  precio: {
    allowNull: false,
    type: DataTypes.DECIMAL(10,2)
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  idCategoria: {
    field: 'id_categoria',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORIA_TABLE,
      key: 'id_categoria'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
}

class Producto extends Model {

  static associate(models) {
    this.belongsTo(models.Categoria, { foreignKey: 'id_categoria',as:'Categoria' });
  };

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTO_TABLE,
      modelName: 'Producto',
      timestamps: false
    }
  }
}

module.exports = { PRODUCTO_TABLE, ProductoSchema, Producto }
