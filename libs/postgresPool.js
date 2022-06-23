const { Pool, } = require('pg');
const fs = require('fs');
const { config } = require('../config/config');
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
//const URI =`postgresql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const configPool = {
  host: config.dbHost,
  port: config.dbPort,
  user: USER,
  password: PASSWORD,
  database: config.dbName,
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync('./libs/ca-certificate-My.crt').toString(),
  },
}


const pool = new Pool(configPool)
//const pool = new Pool({connectionString:URI})

module.exports = pool;
