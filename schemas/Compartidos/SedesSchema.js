const Joi = require('joi');

const idSede= Joi.number().integer().min(1);
const sede = Joi.string().min(1).max(50);
const descripcion = Joi.string().min(1).max(150);
const idEmpresa= Joi.number().integer().min(1);
const idTipoSede= Joi.number().integer().min(1);

const createSedeSchema = Joi.object({
  sede: sede.required(),
  descripcion: descripcion,
  idEmpresa: idEmpresa.required(),
  idTipoSede: idTipoSede.required()
});

const updateSedeSchema = Joi.object({
  sede: sede,
  descripcion: descripcion,
  idEmpresa: idEmpresa,
  idTipoSede: idTipoSede
});

const getSedeSchema = Joi.object({
  idSede: idSede.required()
});

module.exports = {createSedeSchema, updateSedeSchema,getSedeSchema }
