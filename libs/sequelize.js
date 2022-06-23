const { Sequelize } = require('sequelize');
const fs = require('fs');
const { config } = require('../config/config');
const setupModels = require('../db/models');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI =`mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

/*const configPool = {
  host: config.dbHost,
  port: config.dbPort,
  user: USER,
  password: PASSWORD,
  database: config.dbName,
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync('./libs/ca-certificate.crt').toString(),
  },
}*/

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
      ca: fs.readFileSync('./libs/ca-certificate-My.crt').toString(),
    }
  }

});

setupModels(sequelize);
sequelize.sync();
module.exports = sequelize
