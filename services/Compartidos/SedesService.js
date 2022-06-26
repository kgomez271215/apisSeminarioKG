const boom = require('@hapi/boom');
const { models } = require('../../libs/sequelize');

class SedesService {
  constructor() {

  }

  async create(data) {

    const newDatosUsuario = await models.Sedes.create(data);
    return newDatosUsuario;

  }

  async find() {
    const response = await models.Sedes.findAll({

    });
    return response;
  }

  async findOne(id) {
    const datosUsuario = await models.Sedes.findByPk(id,);
    if(!datosUsuario){
      throw boom.notFound('Datos de Sede no existentes');
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

module.exports = SedesService;
