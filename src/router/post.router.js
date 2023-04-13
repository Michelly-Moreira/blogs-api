const postRouter = require('express').Router(); 
const postController = require('../controllers/post.controller');
const { postValidation } = require('../middleware/post.validation');
const { tokenValidation } = require('../middleware/token.validation');

postRouter.post('/', postValidation, tokenValidation, postController.createPost);
postRouter.get('/', tokenValidation, postController.getAllPost);

module.exports = postRouter;