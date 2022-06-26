const Joi = require('joi');

const idUsuario= Joi.number().integer().min(1);
const email=Joi.string().email();
const passwd= Joi.string().min(1).max(50);
const idRol = Joi.number().integer().min(1);
const idEmpresa = Joi.number().integer().min(1);
const estado = Joi.boolean();

const createUsuarioSchema = Joi.object({
  email: email.required(),
  passwd:passwd.required(),
  idRol: idRol.required(),
  idEmpresa:idEmpresa.required(),
});

const updateUsuarioSchema = Joi.object({
  email: email,
  passwd:passwd,
  idRol: idRol,
  idEmpresa:idEmpresa,
  estado: estado
});

const getUsuarioSchema = Joi.object({
  idUsuario: idUsuario.required()
});

module.exports = {createUsuarioSchema, updateUsuarioSchema,getUsuarioSchema }
