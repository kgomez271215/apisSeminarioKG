const Joi = require('joi');

const idTipoSede= Joi.number().integer().min(1);
const tipoSede = Joi.string().min(1).max(50);
const descripcion = Joi.string().max(150);
const estado= Joi.boolean();

const createTipoSedesSchema = Joi.object({
  tipoSede: tipoSede.required(),
  descripcion: descripcion,
});

const updateTipoSedesSchema = Joi.object({
  tipoSede: tipoSede,
  descripcion: descripcion,
  estado: estado,
});

const getTipoSedesSchema = Joi.object({
  idTipoSede: idTipoSede.required()
});

module.exports = {createTipoSedesSchema, updateTipoSedesSchema,getTipoSedesSchema }
