const express = require('express');
const routes = require('./src/routes');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(routes);

app.listen(3333, () => {
  console.log('Servidor iniciado na porta: 3333');
});
