const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../../libs/sequelize');

class DatosUsuarioService {
  constructor() {

  }

  async create(data) {
    const hash = await bcrypt.hash(data.Usuario.passwd, 10);
    const dataNewPass = {
      ...data,
      Usuario: {
        ...data.Usuario,
        passwd: hash
      }
    }
    const newDatosUsuario = await models.DatosUsuario.create(dataNewPass, {
      include: ['Usuario']
    });

    delete newDatosUsuario.dataValues.Usuario.dataValues.passwd;
    return newDatosUsuario;

  }

  async find() {
    const response = await models.DatosUsuario.findAll({ include: ['Usuario'] });
    return response;
  }

  async findOne(id) {
    const datosUsuario = await models.DatosUsuario.findByPk(id);
    if (!datosUsuario) {
      throw boom.notFound('Datos de usuario no existentes');
    }
    return datosUsuario;

  }

  async update(id, changes) {
    const datosUsuario = await this.findOne(id);
    const rta = await datosUsuario.update(changes);
    return rta;
  }

  async delete(id) {
    const datosUsuario = await this.findOne(id);
    await datosUsuario.destroy();
    return { id }
  }

}

module.exports = DatosUsuarioService;
