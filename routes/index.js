const express = require('express');
const productsRouter = require('./productsRouter');
const UsersRouter = require('./Compartidos/UsersRouter');
const DatosUsuarioRouter = require('./Compartidos/DatosUsuarioRouter');
const EmpresasRouter = require('./Compartidos/EmpresasRouter');
const SedesRouter = require('./Compartidos/SedesRouter');
const TipoSedesRouter = require('./Compartidos/TipoSedesRouter');
const ServiciosRouter = require('./Compartidos/ServiciosRouter');
const AuthRouter = require('./Compartidos/AuthRouter');
const categoriasRouter = require('./categoriasRouter');



function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products',productsRouter);
  router.use('/Users',UsersRouter);
  router.use('/Empresas',EmpresasRouter);
  router.use('/Sedes',SedesRouter);
  router.use('/TipoSedes',TipoSedesRouter);
  router.use('/DatosUsuario',DatosUsuarioRouter);
  router.use('/Servicios',ServiciosRouter);
  router.use('/categorias',categoriasRouter);
  router.use('/Auth',AuthRouter);
}

module.exports = routerApi;



