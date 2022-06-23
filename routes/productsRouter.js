const express = require('express');
const ProductService = require('../services/productsService');
const { createProductSchema } = require('../schemas/productSchema');
const validatorHandler = require('../middlewares/validatorHandler');

const router = express.Router();
const service = new ProductService();

router.get('/filter', (req, res) => {
  res.send('ruta de filtro');
});

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products)
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res,next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error)
    }
  });

router.patch('/:id', async (req, res, next) => {

  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.json(product);
})

module.exports = router;
