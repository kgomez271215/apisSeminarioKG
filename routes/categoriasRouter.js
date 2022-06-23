const express = require('express');
const CategoriasService = require('../services/categoriasService');
const { createCategoriaSchema } = require('../schemas/categoriaSchema');
const validatorHandler = require('../middlewares/validatorHandler');

const router = express.Router();
const service = new CategoriasService();

router.get('/filter', (req, res) => {
  res.send('ruta de filtro');
});

router.get('/', async (req, res) => {
  const categoria = await service.find();
  res.json(categoria)
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const categoria = await service.findOne(id);
    res.json(categoria);
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorHandler(createCategoriaSchema, 'body'),
  async (req, res,next) => {
    try {
      const body = req.body;
      const categoria = await service.create(body);
      res.status(201).json(categoria);
    } catch (error) {
      next(error)
    }
  });

router.patch('/:id', async (req, res, next) => {

  try {
    const { id } = req.params;
    const body = req.body;
    const categoria = await service.update(id, body);
    res.json(categoria);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const categoria = await service.delete(id);
  res.json(categoria);
})

module.exports = router;
