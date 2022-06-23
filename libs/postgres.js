const {Client} = require('pg');
const fs = require('fs');


async function getConection(){
  const client = new Client({
    host: 'db-postgresql-nyc3-12636-do-user-11568312-0.b.db.ondigitalocean.com',
    port: 25060,
    user:'doadmin',
    password: 'AVNS_CFfGnfJ8umdgLSIU279',
    database: 'test',
    ssl: true,
    rejectUnauthorized: false,
    ca: fs.readFileSync('/ca-certificate.crt').toString(),
  });
  await client.connect();
  return client;
}

module.exports = getConection;



