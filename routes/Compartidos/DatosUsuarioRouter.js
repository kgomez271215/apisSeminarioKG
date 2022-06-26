const express = require('express');
const DatosUsuarioService = require('../../services/Compartidos/DatosUsuarioService');
const { createDatosUsuarioSchema, updateDatosUsuarioSchema, getDatosUsuarioSchema } = require('../../schemas/Compartidos/DatosUsuarioSchema');
const validatorHandler = require('../../middlewares/validatorHandler');

const router = express.Router();
const service = new DatosUsuarioService();

router.get('/', async (req, res) => {
  const datosUsuario = await service.find();
  res.json(datosUsuario)
})

router.get('/:idDatosUsuario',
  validatorHandler(getDatosUsuarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idDatosUsuario } = req.params;
      const datosUsuario = await service.findOne(idDatosUsuario);
      res.json(datosUsuario);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createDatosUsuarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newDatosUsuario = await service.create(body);
      res.status(201).json(newDatosUsuario);
    } catch (error) {
      next(error)
    }
  });

router.patch('/:idDatosUsuario',
  validatorHandler(updateDatosUsuarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idDatosUsuario } = req.params;
      const body = req.body;
      const datosUsuario = await service.update(idDatosUsuario, body);
      res.json(datosUsuario);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:idDatosUsuario',
  validatorHandler(getDatosUsuarioSchema, 'params'),
  async (req, res) => {
    const { idDatosUsuario } = req.params;
    const datosUsuario = await service.delete(idDatosUsuario);
    res.json(datosUsuario);
  })

module.exports = router;
