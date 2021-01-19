const express = require('express');

const app = express();
app.get('/', (req, resp) => {
  resp.send('primeira rota acessada!');
});

app.listen(3333, () => {
  console.log('Servidor iniciado na porta: 3333');
});
