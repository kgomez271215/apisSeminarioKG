const boom = require('@hapi/boom');
const { models } = require('../../libs/sequelize');

class EmpresasService {
  constructor() {

  }

  async create(data) {

    const newDatosUsuario = await models.Empresas.create(data);
    return newDatosUsuario;

  }
  async createServicio(data) {
    const newDatosUsuario = await models.ServiciosEmpresa.create(data);
    return newDatosUsuario;

  }


  async find() {
    const response = await models.Empresas.findAll();
    return response;
  }

  async findOne(id) {
    const datosUsuario = await models.Empresas.findByPk(id);
    if(!datosUsuario){
      throw boom.notFound('Datos de Empresa no existentes');
    }
    return datosUsuario;
  }
 /* async findOne(id) {
    const datosUsuario = await models.Empresas.findByPk(id,{
      include:['EmpresaServicios']
    });
    if(!datosUsuario){
      throw boom.notFound('Datos de Empresa no existentes');
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

module.exports = EmpresasService;
