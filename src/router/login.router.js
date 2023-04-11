const loginRouter = require('express').Router(); 
const loginController = require('../controllers/login.controller');
const { loginValidation } = require('../middleware/login.validation');

loginRouter.use(loginValidation);
loginRouter.post('/', loginController.signin);

module.exports = loginRouter;