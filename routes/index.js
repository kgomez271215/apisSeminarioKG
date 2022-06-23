const express = require('express');
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const categoriasRouter = require('./categoriasRouter');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products',productsRouter);
  router.use('/users',usersRouter);
  router.use('/categorias',categoriasRouter);
}

module.exports = routerApi;
