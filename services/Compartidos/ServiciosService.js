const boom = require('@hapi/boom');
const { models } = require('../../libs/sequelize');

class ServiciosService {
  constructor() {

  }

  async create(data) {

    const newDatosUsuario = await models.Servicios.create(data);
    return newDatosUsuario;

  }

  async find() {
    const response = await models.Servicios.findAll();
    return response;
  }

  async findOne(id) {
    const datosUsuario = await models.Servicios.findByPk(id);
    if(!datosUsuario){
      throw boom.notFound('Datos del Servicio no existentes');
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
    return {id}
  }

}

module.exports = ServiciosService;
