const userRouter = require('express').Router(); 
const userController = require('../controllers/user.controller');
const { userValidation } = require('../middleware/user.validation');
const { tokenValidation } = require('../middleware/token.validation');

userRouter.post('/', userValidation, userController.createUser);
userRouter.get('/', tokenValidation, userController.getAll);
userRouter.get('/:id', tokenValidation, userController.getById);

module.exports = userRouter;