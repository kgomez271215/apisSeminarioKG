const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../../libs/sequelize');

class UsuariosService {
  constructor() {

  }

  async create(data) {
    const hash = await bcrypt.hash(data.passwd, 10);
    const newUsuario = await models.Usuarios.create({
      ...data,
      passwd: hash
    });
    delete newUsuario.dataValues.passwd;
    return newUsuario;
  }

  async find() {
    const response = await models.Usuarios.findAll({
      include: ['Datos','Rol','Empresa']});
    return response;
  }

  async findOne(id) {
    const user = await models.Usuarios.findByPk(id);
    if(!user){
      throw boom.notFound('Usuario no existente');
    }
    return user;

  }

  async findByEmail(email) {
    const response = await models.Usuarios.findOne({
      where: { email: email },
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
