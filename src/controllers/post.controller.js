const { postService } = require('../services');
// const { decodeToken } = require('../utils/auth');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const newPost = await postService.createPost(title, content, categoryIds);
    return res.status(201).json(newPost);
    // decodificação do token
/*     const token = decodeToken.decoded(newPost);
    return token */
};

const getAllPost = async (_req, res) => {
const allBlogPosts = await postService.getAllPost();
return res.status(200).json(allBlogPosts);
};

module.exports = {
createPost,
getAllPost,
};