const { Category } = require('../models');

const createCategory = async (name) => {
// cadastrando uma nova categoria
const newCategory = await Category.create({ name });
return newCategory;
};

const getAllCategory = async () => {
const categories = await Category.findAll();
return categories;
};

module.exports = {
    createCategory,
    getAllCategory,
};