const { Category } = require('../models');

const createCategory = async (name) => {
// cadastrando uma nova categoria
const newCategory = await Category.create({ name });

return newCategory;
};

module.exports = {
    createCategory,
};