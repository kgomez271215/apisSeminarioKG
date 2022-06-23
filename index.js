const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler,boomErrorHandler,ormErrorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.listen(port, () => {
  console.log('Api corriendo en puerto: ' + port);
})

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

