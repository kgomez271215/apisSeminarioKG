const { config } = require('../config/config');
const fs = require('fs');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI =`mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

module.exports={
  development:{
    url: URI,
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        ca: fs.readFileSync('./db/ca-certificate-My.crt').toString()
      }
    }
  },
  production:{
    url: URI,
    dialect: 'mysql',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        ca: fs.readFileSync('./db/ca-certificate-My.crt').toString()
      }
    }
  }
}
