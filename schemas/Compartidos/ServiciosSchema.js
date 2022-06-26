const Joi = require('joi');

const idServicio= Joi.number().integer().min(1);
const servicio = Joi.string().min(1).max(50);
const descripcion = Joi.string().min(1).max(150);

const createServicioSchema = Joi.object({
  servicio: servicio.required(),
  descripcion: descripcion,
});

const updateServicioSchema = Joi.object({
  servicio: servicio,
  descripcion: descripcion,
});

const getServicioSchema = Joi.object({
  idServicio: idServicio.required()
});

module.exports = {createServicioSchema, updateServicioSchema,getServicioSchema }
