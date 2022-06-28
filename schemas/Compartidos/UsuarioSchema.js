const Joi = require('joi');

const idUsuario= Joi.number().integer().min(1);
const email=Joi.string().email();
const passwd= Joi.string().min(1).max(50);
const idRol = Joi.number().integer().min(1);
const idEmpresa = Joi.number().integer().min(1);
const estado = Joi.boolean();

const nombres = Joi.string().min(1).max(50);
const apellidos = Joi.string().min(1).max(50);
const fNacimiento = Joi.date();
const genero = Joi.string().min(1).max(50);

const prefijo = Joi.number().integer().min(1);
const telefono = Joi.number().integer().min(5);
const idTipoTelefono= Joi.number().integer().min(1);

const correo = Joi.string().min(1).max(50);
const idTipoCorreo= Joi.number().integer().min(1);


const createUsuarioSchema = Joi.object({
  email: email.required(),
  passwd:passwd.required(),
  idRol: idRol.required(),
  idEmpresa:idEmpresa.required(),
  Datos: Joi.object({
    nombres: nombres.required(),
    apellidos: apellidos.required(),
    fNacimiento: fNacimiento.required(),
    genero: genero.required(),
  }),
  Telefono: Joi.object({
    prefijo: prefijo.required(),
    telefono: telefono.required(),
    idTipoTelefono: idTipoTelefono.required(),
  }),
  Correo: Joi.object({
    correo: correo.required(),
    idTipoCorreo: idTipoCorreo.required(),
  })
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
