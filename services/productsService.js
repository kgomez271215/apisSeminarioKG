const faker = require('faker');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
    /* this.pool = pool;
     this.pool.on('error', (err) => console.log(err));
     */
  }

  generate() {
    const limit = 50;
    for (let index = 0; index < limit; index++) {
      this.products.push(
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

    const newProduct = await models.Product.create(data);
    return newProduct;

  }

  async find() {
    const response = await models.Product.findAll();
    return response;
  }

  async findOne(id) {
    const user = await models.Product.findByPk(id);
    if(!user){
      throw boom.notFound('Producto no existe');
    }
    return user;

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

module.exports = ProductService;
