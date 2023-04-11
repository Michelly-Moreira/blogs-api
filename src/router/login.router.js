const loginRouter = require('express').Router(); 
const loginController = require('../controllers/login.controller');

loginRouter.post('/', loginController.signin);

module.exports = loginRouter;