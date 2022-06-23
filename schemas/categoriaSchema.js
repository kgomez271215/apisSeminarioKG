const Joi = require('joi');

const id= Joi.string().uuid();
const categoria= Joi.string().min(1).max(30);
const descripcion = Joi.string().min(3).max(100);

const createCategoriaSchema = Joi.object({
  categoria: categoria.required(),
  descripcion:descripcion,
});

const updateCategoriaSchema = Joi.object({
  categoria: categoria,
  descripcion: descripcion,
});

const getCategoriaSchema = Joi.object({
  id: id.required()
});

module.exports = {createCategoriaSchema, updateCategoriaSchema,getCategoriaSchema }
