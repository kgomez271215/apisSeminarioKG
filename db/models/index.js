const {Product, ProductSchema} = require('./productsModel');

function setupModels(sequelize){
  Product.init(ProductSchema, Product.config(sequelize));
}


module.exports=setupModels;
