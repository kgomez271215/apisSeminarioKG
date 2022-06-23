const faker = require('faker');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CategoriasService {
  constructor() {
    this.categorias = [];
    this.generate();
    /* this.pool = pool;
     this.pool.on('error', (err) => console.log(err));
     */
  }

  generate() {
    const limit = 50;
    for (let index = 0; index < limit; index++) {
      this.categorias.push(
        {
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          price: parseInt(faker.commerce.price(), 10),
          image: faker.image.imageUrl(),
          block: faker.datatype.boolean()
        }
      )
    }
  }

  async create(data) {
    const newProduct = await models.Categoria.create(data);
    return newProduct;

  }

  async find() {
    const response = await models.Categoria.findAll();
    return response;
  }

  async findOne(id) {
    const Categoria = await models.Categoria.findByPk(id);
    if(!Categoria){
      throw boom.notFound('Producto no existe');
    }
    return Categoria;

  }

  async update(id, changes) {
    const categoria = await this.findOne(id);
    const rta = await categoria.update(changes);
    return rta;
  }

  async delete(id) {
    const categoria = await this.findOne(id);
    await categoria.destroy();
    return {id}
  }

}

module.exports = CategoriasService;
