const Joi = require('joi');

const idEmpresa= Joi.number().integer().min(1);
const empresa = Joi.string().min(1).max(50);
const descripcion = Joi.string().min(1).max(150);
const vision = Joi.string().max(150);
const mision = Joi.string().max(150);
const logo = Joi.string().max(150);
const idServicio= Joi.number().integer().min(1);
const estado= Joi.boolean();

const createEmpresaSchema = Joi.object({
  empresa: empresa.required(),
  descripcion: descripcion.required(),
  vision: vision,
  mision: mision,
  logo: logo
});

const updateEmpresaSchema = Joi.object({
  empresa: empresa,
  descripcion: descripcion,
  vision: vision,
  mision: mision,
  logo: logo,
  estado:estado
});

const getEmpresaSchema = Joi.object({
  idEmpresa: idEmpresa.required()
});

const addServicioEmpresaSchema = Joi.object({
  idEmpresa: idEmpresa.required(),
  idServicio: idServicio.required()
});

module.exports = {createEmpresaSchema, updateEmpresaSchema,getEmpresaSchema,addServicioEmpresaSchema }
