const userRouter = require('express').Router(); 
const userController = require('../controllers/user.controller');
const { userValidation } = require('../middleware/user.validation');

userRouter.use(userValidation);
userRouter.post('/', userController.createUser);

module.exports = userRouter;