const express = require('express');
const userController = require('./controller/userController');
const sessionController = require('./controller/sessionController');
const adminController = require('./controller/adminController');

const routes = express.Router();
routes.use(express.json());

routes.get('/', (req, res) => {
  res.send('rota get user');
});

/**Users*/
routes.get('/user', userController.list);
routes.post('/user', userController.create);
routes.delete('/user', userController.remove);

/**Session */
routes.post('/session', sessionController.session);

/**Admin */
routes.post('/user/add', adminController.add);

module.exports = routes;
