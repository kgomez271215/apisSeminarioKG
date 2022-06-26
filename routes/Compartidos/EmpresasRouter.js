const express = require('express');
const EmpresasService = require('../../services/Compartidos/EmpresasService');
const { createEmpresaSchema, updateEmpresaSchema, getEmpresaSchema,addServicioEmpresaSchema } = require('../../schemas/Compartidos/EmpresasSchema');
const validatorHandler = require('../../middlewares/validatorHandler');

const router = express.Router();
const service = new EmpresasService();

router.get('/', async (req, res) => {
  const datosUsuario = await service.find();
  res.json(datosUsuario)
})

router.get('/:idEmpresa',
  validatorHandler(getEmpresaSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idEmpresa } = req.params;
      const datosUsuario = await service.findOne(idEmpresa);
      res.json(datosUsuario);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createEmpresaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newDatosUsuario = await service.create(body);
      res.status(201).json(newDatosUsuario);
    } catch (error) {
      next(error)
    }
  });

  router.post('/add-servicio',
  validatorHandler(addServicioEmpresaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newServcioEmpresa = await service.createServicio(body);
      res.status(201).json(newServcioEmpresa);
    } catch (error) {
      next(error)
    }
  });

router.patch('/:idEmpresa',
  validatorHandler(updateEmpresaSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idEmpresa } = req.params;
      const body = req.body;
      const datosUsuario = await service.update(idEmpresa, body);
      res.json(datosUsuario);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:idEmpresa',
  validatorHandler(getEmpresaSchema, 'params'),
  async (req, res) => {
    const { idEmpresa } = req.params;
    const datosUsuario = await service.delete(idEmpresa);
    res.json(datosUsuario);
  })

module.exports = router;
