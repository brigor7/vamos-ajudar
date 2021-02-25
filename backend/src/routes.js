const express = require('express');
const userController = require('./controller/userController');
const sessionController = require('./controller/sessionController');
const adminController = require('./controller/adminController');
const familyController = require('./controller/familyController');
const integrantController = require('./controller/integrantController');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const upload = multer(uploadConfig);
const routes = express.Router();
routes.use(express.json());

routes.get('/', (req, res) => {
  res.send('rota get user');
});

/**Users*/
routes.get('/user', userController.list);
routes.post('/user', upload.single('thumbnail'), userController.create);
routes.delete('/user', userController.remove);

/**Session */
routes.post('/session', sessionController.session);
routes.post('/session/jwt', sessionController.verify);

/**Admin */
routes.post('/user/add', adminController.add);

/**Family */
routes.get('/family', familyController.list);
routes.get('/family/:id', familyController.get);
routes.post('/family', familyController.create);
routes.delete('/family', familyController.delete);

/**Integrants */
routes.get('/integrant', integrantController.list);
routes.get('/integrant/:id', integrantController.get);
routes.post('/integrant', upload.single('avatar'), integrantController.create);
routes.delete('/integrant', integrantController.delete);

module.exports = routes;
