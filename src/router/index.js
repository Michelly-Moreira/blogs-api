const router = require('express').Router(); 
const loginRouter = require('./login.router');
const userRouter = require('./user.router');
const loginValidation = require('../middleware/login.validation');
const tokenValidation = require('../middleware/token.validation');

router.use('/login', loginValidation, loginRouter);
router.use('/user', tokenValidation, userRouter);

module.exports = router;