const Joi = require('joi');

const id= Joi.string().uuid();
const producto= Joi.string().min(3).max(30);
const precio= Joi.number().integer().min(1);
const idCategoria= Joi.number().integer().min(1);

const createProductoSchema = Joi.object({
  producto: producto.required(),
  precio: precio.required(),
  idCategoria: idCategoria.required()
});

const updateProductSchema = Joi.object({
  producto: producto,
  precio: precio,
  idCategoria: idCategoria
});

const getProductSchema = Joi.object({
  id: id.required()
});

module.exports = {createProductoSchema, updateProductSchema,getProductSchema }
