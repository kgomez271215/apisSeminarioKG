const express = require('express');
const ServiciosService = require('../../services/Compartidos/ServiciosService');
const { createServicioSchema, updateServicioSchema, getServicioSchema } = require('../../schemas/Compartidos/ServiciosSchema');
const validatorHandler = require('../../middlewares/validatorHandler');

const router = express.Router();
const service = new ServiciosService();

router.get('/', async (req, res) => {
  const datosUsuario = await service.find();
  res.json(datosUsuario)
})

router.get('/:idServicio',
  validatorHandler(getServicioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idServicio } = req.params;
      const datosUsuario = await service.findOne(idServicio);
      res.json(datosUsuario);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createServicioSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newDatosUsuario = await service.create(body);
      res.status(201).json(newDatosUsuario);
    } catch (error) {
      next(error)
    }
  });

router.patch('/:idServicio',
  validatorHandler(updateServicioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idServicio } = req.params;
      const body = req.body;
      const datosUsuario = await service.update(idServicio, body);
      res.json(datosUsuario);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:idServicio',
  validatorHandler(getServicioSchema, 'params'),
  async (req, res) => {
    const { idServicio } = req.params;
    const datosUsuario = await service.delete(idServicio);
    res.json(datosUsuario);
  })

module.exports = router;
