const userRouter = require('express').Router(); 
const { tokenValidation } = require('../middleware/token.validation');
// const userController = require('../controllers/user.controller');

userRouter.use(tokenValidation);
userRouter.post('/');

module.exports = userRouter;