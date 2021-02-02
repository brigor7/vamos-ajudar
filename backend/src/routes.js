const express = require('express');
const userController = require('./controller/userController');
const sessionController = require('./controller/sessionController');
const adminController = require('./controller/adminController');
const familyController = require('./controller/familyController');
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

/**Admin */
routes.post('/user/add', adminController.add);

/**Family */
routes.get('/family', familyController.list);
routes.get('/family/:id', familyController.get);
routes.post('/family', familyController.create);
routes.delete('/family', familyController.delete);

module.exports = routes;
