const express = require('express');
const UsuariosService = require('../../services/Compartidos/UsuariosService');
const { createUsuarioSchema, updateUsuarioSchema, getUsuarioSchema } = require('../../schemas/Compartidos/UsuarioSchema');
const validatorHandler = require('../../middlewares/validatorHandler');

const router = express.Router();
const service = new UsuariosService();

router.get('/', async (req, res) => {

  const usuarios = await service.find();
  res.json(usuarios)
})

router.get('/Admin', async (req, res) => {
  const idEmpresa = req.query;
  const usuarios = await service.findAdmin(idEmpresa);
  res.json(usuarios)
})

router.get('/:idUsuario',
  validatorHandler(getUsuarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { idUsuario } = req.params;
      const usuario = await service.findOne(idUsuario);
      res.json(usuario);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createUsuarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUsuario = await service.create(body);
      res.status(201).json(newUsuario);
    } catch (error) {
      next(error)
    }
  });

router.patch('/:idUsuario',
  validatorHandler(updateUsuarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { idUsuario } = req.params;
      const body = req.body;
      const usuario = await service.update(idUsuario, body);
      res.json(usuario);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:idUsuario',
  validatorHandler(getUsuarioSchema, 'params'),
  async (req, res) => {
    const { idUsuario } = req.params;
    const usuario = await service.delete(idUsuario);
    res.json(usuario);
  })

module.exports = router;
