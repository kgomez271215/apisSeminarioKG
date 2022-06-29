const express = require('express');
//const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler,boomErrorHandler,ormErrorHandler } = require('./middlewares/errorHandler');
const {checkApiKey} = require('./middlewares/authHandler');
const app = express();
const hostname = 'localhost';
const port = 3000;
app.use(express.json());

/*const whitelist = ['http://localhost:3000','http://localhost:8000', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));
*/
require('./utils/auth');
/*
app.get('/',checkApiKey, (req, res) => {
  res.send('Hola mi server en express');
});*/

/*app.listen(port, () => {
  console.log('Api corriendo en puerto: ' + port);
})*/


app.get('/', (req, res) => {
  res.send(`
  <html>
  <head>
      <title>Seminario de Analisis y Diseño de sistemas</title>
      <style>
      body{
          background-color: #e3e3e3;
      }
      </style>
  </head>
  <body>
  <center >
  <h1>Seminario de Analisis y Diseño de sistemas</h1>
  <h2>Nombre: Kevin Hernán Gómez Malchic</h2>
  <h2>Carnet: 0908-14-12551</h2>
  <img src="https://i.pinimg.com/originals/6c/f0/f2/6cf0f25b334161bda56f9262c2b5773a.gif">
  </center>
  </body>
  </html>`);
});

app.listen(port, hostname, () => {
  console.log(`Servidor corriento en: http://${hostname}:${port}/`);
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

