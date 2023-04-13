const { BlogPost } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');

const createPost = async (title, content, categoryIds) => {
    const newPost = await BlogPost.create({ title, content, categoryIds });
    return newPost;
};

const getAllPost = async () => {
    const allPosts = await BlogPost.findAll({
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' }],
    });
    return allPosts;
    };

    module.exports = {
        createPost,
        getAllPost,
    };