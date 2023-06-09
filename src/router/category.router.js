const categoryRouter = require('express').Router(); 
const categoryController = require('../controllers/category.controller');
const { tokenValidation } = require('../middleware/token.validation');

categoryRouter.post('/', tokenValidation, categoryController.createCategory);
categoryRouter.get('/', tokenValidation, categoryController.getAllCategory);

module.exports = categoryRouter;