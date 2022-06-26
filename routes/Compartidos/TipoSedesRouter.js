const express = require('express');
const TipoSedesService = require('../../services/Compartidos/TipoSedesService');
const { createTipoSedesSchema, updateTipoSedesSchema, getTipoSedesSchema } = require('../../schemas/Compartidos/TipoSedesSchema');
const validatorHandler = require('../../middlewares/validatorHandler');

const router = express.Router();
const service = new TipoSedesService();

router.get('/', async (req, res) => {
  const datosUsuario = await service.find();
  res.json(datosUsuario)
})

router.get('/:idTipoSede',
  validatorHandler(getTipoSedesSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idTipoSede } = req.params;
      const datosUsuario = await service.findOne(idTipoSede);
      res.json(datosUsuario);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createTipoSedesSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newDatosUsuario = await service.create(body);
      res.status(201).json(newDatosUsuario);
    } catch (error) {
      next(error)
    }
  });

router.patch('/:idTipoSede',
  validatorHandler(updateTipoSedesSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idTipoSede } = req.params;
      const body = req.body;
      const datosUsuario = await service.update(idTipoSede, body);
      res.json(datosUsuario);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:idTipoSede',
  validatorHandler(getTipoSedesSchema, 'params'),
  async (req, res) => {
    const { idTipoSede } = req.params;
    const datosUsuario = await service.delete(idTipoSede);
    res.json(datosUsuario);
  })

module.exports = router;
