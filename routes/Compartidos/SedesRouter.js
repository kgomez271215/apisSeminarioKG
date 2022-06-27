const express = require('express');
const SedesService = require('../../services/Compartidos/SedesService');
const { createSedeSchema, updateSedeSchema, getSedeSchema } = require('../../schemas/Compartidos/SedesSchema');
const validatorHandler = require('../../middlewares/validatorHandler');

const router = express.Router();
const service = new SedesService();

router.get('/', async (req, res) => {
  const datosUsuario = await service.find();
  res.json(datosUsuario)
})

router.get('/:idSede',
  validatorHandler(getSedeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idSede } = req.params;
      const datosUsuario = await service.findOneByEmpresa(idSede);
      res.json(datosUsuario);
    } catch (error) {
      next(error);
    }
  });

router.get('/edit/:idSede',
  validatorHandler(getSedeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idSede } = req.params;
      const datosUsuario = await service.findOne(idSede);
      res.json(datosUsuario);
    } catch (error) {
      next(error);
    }
  });
router.post('/',
  validatorHandler(createSedeSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newDatosUsuario = await service.create(body);
      res.status(201).json(newDatosUsuario);
    } catch (error) {
      next(error)
    }
  });

router.patch('/:idSede',
  validatorHandler(updateSedeSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idSede } = req.params;
      const body = req.body;
      const datosUsuario = await service.update(idSede, body);
      res.json(datosUsuario);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:idSede',
  validatorHandler(getSedeSchema, 'params'),
  async (req, res) => {
    const { idSede } = req.params;
    const datosUsuario = await service.delete(idSede);
    res.json(datosUsuario);
  })

module.exports = router;
