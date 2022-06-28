const Joi = require('joi');

const idCorreoUsuario= Joi.number().integer().min(1);
const correo = Joi.string().min(1).max(50);
const idTipoCorreo= Joi.number().integer().min(1);
const idUser= Joi.number().integer().min(1);

const estado= Joi.boolean();

const createCorreosUsuarioSchema = Joi.object({
  correo: correo.required(),
  idTipoCorreo: idTipoCorreo.required(),
  idUser: idUser.required()
});

const updateCorreosUsuarioSchema = Joi.object({
  correo: correo,
  idTipoCorreo: idTipoCorreo,
  estado:estado
});

const getCorreosUsuarioSchema = Joi.object({
  idCorreoUsuario: idCorreoUsuario.required()
});



module.exports = {createCorreosUsuarioSchema, updateCorreosUsuarioSchema,getCorreosUsuarioSchema }
