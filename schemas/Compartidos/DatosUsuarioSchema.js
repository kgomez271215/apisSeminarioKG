const Joi = require('joi');

const idDatosUsuario= Joi.number().integer().min(1);
const nombres = Joi.string().min(1).max(50);
const apellidos = Joi.string().min(1).max(50);
const fNacimiento = Joi.date();
const genero = Joi.string().min(1).max(50);
const estado = Joi.boolean();
//const idUser= Joi.number().integer().min(1);
const email=Joi.string().email();
const passwd= Joi.string().min(1).max(50);
const idRol = Joi.number().integer().min(1);
const idEmpresa = Joi.number().integer().min(1);

const createDatosUsuarioSchema = Joi.object({
  nombres: nombres.required(),
  apellidos: apellidos.required(),
  fNacimiento: fNacimiento.required(),
  genero: genero.required(),
  Usuario: Joi.object({
    email: email.required(),
    passwd:passwd.required(),
    idRol: idRol.required(),
    idEmpresa:idEmpresa.required(),
  })
});

const updateDatosUsuarioSchema = Joi.object({
  nombres: nombres,
  apellidos: apellidos,
  fNacimiento: fNacimiento,
  genero: genero,
  estado: estado
});

const getDatosUsuarioSchema = Joi.object({
  idDatosUsuario: idDatosUsuario.required()
});

module.exports = {createDatosUsuarioSchema, updateDatosUsuarioSchema,getDatosUsuarioSchema }
