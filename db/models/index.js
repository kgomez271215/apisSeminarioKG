const {Producto, ProductoSchema} = require('./productsModel');
const {Categoria, CategoriaSchema} = require('./categoriasModel');

function setupModels(sequelize){
  Categoria.init(CategoriaSchema, Categoria.config(sequelize));
  Producto.init(ProductoSchema, Producto.config(sequelize));

  //ejecucion de asociaciones
  Producto.associate(sequelize.models);
}


module.exports=setupModels;
