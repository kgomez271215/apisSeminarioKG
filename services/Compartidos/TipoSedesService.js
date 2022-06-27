const boom = require('@hapi/boom');
const { models } = require('../../libs/sequelize');

class TipoSedesService {
  constructor() {

  }

  async create(data) {

    const newDatosUsuario = await models.TipoSedes.create(data);
    return newDatosUsuario;

  }

  async find() {
    const response = await models.TipoSedes.findAll();
    return response;
  }
  async findOne(id) {
    const datosUsuario = await models.TipoSedes.findByPk(id);
    if(!datosUsuario){
      throw boom.notFound('Datos del Tipo de sede no existentes');
    }
    return datosUsuario;
  }
/*
  async findOne(id) {
    const datosUsuario = await models.TipoSedes.findByPk(id,{
      include: ['SedesTipo']
    });
    if(!datosUsuario){
      throw boom.notFound('Datos del Tipo de sede no existentes');
    }
    return datosUsuario;
  }*/

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

module.exports = TipoSedesService;
