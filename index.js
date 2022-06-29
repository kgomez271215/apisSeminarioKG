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
  res.send('Hola mi server en express');
});

app.listen(port, hostname, () => {
  console.log(`Servidor corriento en: http://${hostname}:${port}/`);
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

