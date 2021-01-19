const express = require('express');
const userController = require('./controller/userController');

const routes = express.Router();
routes.use(express.json());

routes.get('/', (req, res) => {
  res.send('rota get user');
});

/**Users*/
routes.get('/user', userController.get);
routes.post('/user', userController.create);
module.exports = routes;
