const Joi = require('joi');

const id= Joi.string().uuid();
const nombre= Joi.string().min(3).max(30);
const precio= Joi.number().integer().min(1);

const createProductSchema = Joi.object({
  nombre: nombre.required(),
  precio: precio.required()
});

const updateProductSchema = Joi.object({
  nombre: nombre,
  precio: precio
});

const getProductSchema = Joi.object({
  id: id.required()
});

module.exports = {createProductSchema, updateProductSchema,getProductSchema }
