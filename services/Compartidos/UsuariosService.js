const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../../libs/sequelize');
const { Op } = require("sequelize");

class UsuariosService {
  constructor() {

  }

 /* async create(data) {
    const hash = await bcrypt.hash(data.passwd, 10);

    const newUsuario = await models.Usuarios.create({
      ...data,
      passwd: hash
    });

    delete newUsuario.dataValues.passwd;
    return newUsuario;
  }*/

  async create(data) {
    const hash = await bcrypt.hash(data.passwd, 10);

    const dataNewPass = {
      ...data,
      passwd: hash,
      Datos: {
        ...data.Datos,
      },
      Telefono: {
        ...data.Telefono,
      },
      Correo: {
        ...data.Correo,
      },
    }
    const newUsuario = await models.Usuarios.create(dataNewPass, {
      include: ['Datos','Telefono','Correo']
    });

    //delete newUsuario.dataValues.Usuario.dataValues.passwd;
    delete newUsuario.dataValues.passwd;
    return newUsuario;

  }

  async find() {
    const response = await models.Usuarios.findAll({
      where: { idRol: 2 },
      include: ['Datos','Rol','Empresa'],
      attributes: {exclude: ['passwd']},
      order: [
        ['idEmpresa', 'DESC']
      ]
    });
    return response;
  }

  async findAdmin(empresa) {
    const response = await models.Usuarios.findAll({
      where: { idRol: {[Op.gt]:2}, idEmpresa: empresa.idEmpresa},
      include: ['Datos','Rol','Empresa'],
      attributes: {exclude: ['passwd']},
      order: [
        ['idEmpresa', 'DESC']
      ]
    });
    return response;
  }
  /*async findByEmpresa(idEmpresa) {
    const response = await models.Usuarios.findAll({
      include: ['Datos','Rol','Empresa']});
    return response;
  }
*/
  async findOne(id) {
    const user = await models.Usuarios.findByPk(id);
    if(!user){
      throw boom.notFound('Usuario no existente');
    }
    return user;

  }

  async findByEmail(email) {
    const response = await models.Usuarios.findOne({
      where: { email: email , estado: 1},
      include: ['Datos']
    });
    return response;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return {id}
  }

}

module.exports = UsuariosService;
