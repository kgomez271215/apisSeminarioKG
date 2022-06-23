'use strict';
const {PRODUCT_TABLE, ProductSchema} = require('../models/productsModel');
module.exports = {
  async up (queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable(PRODUCT_TABLE,ProductSchema);
  },

  async down (queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     await queryInterface.dropTable(PRODUCT_TABLE);
  }
};
