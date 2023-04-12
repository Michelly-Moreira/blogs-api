const userRouter = require('express').Router(); 
const userController = require('../controllers/user.controller');
const { userValidation } = require('../middleware/user.validation');
const { tokenValidation } = require('../middleware/token.validation');

userRouter.use(userValidation, tokenValidation);
userRouter.post('/', userController.createUser);
userRouter.get('/', userController.getAll);

module.exports = userRouter;