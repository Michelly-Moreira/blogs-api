const { categoryService } = require('../services');

const createCategory = async (req, res) => {
    const { name } = req.body;
const newCategory = await categoryService.createCategory(name);
if (!name) return res.status(400).json('"name" is required');

return res.status(201).json(newCategory);
};

module.exports = {
    createCategory,
};