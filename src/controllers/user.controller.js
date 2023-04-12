const { userService } = require('../services');

const error500Message = 'internal error';

const createUser = async (req, res) => {
try {
    const { displayName, email, password, image } = req.body;
    const newUser = await userService.create(displayName, email, password, image);
    // console.log(newUser);
    return res.status(201).json({ token: newUser });
} catch (error) {
    // console.log(error.message);
    if (error.status) {
        return res.status(error.status).json({ message: error.message });
    }
    return res.status(500).json({ message: error500Message });
    }
};

const getAll = async (_req, res) => {
    const getAllUsers = await userService.getAll();
    return res.status(200).json(getAllUsers);
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
    const getId = await userService.getById(id);
    if (!getId) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(getId);
    } catch (error) {
        return res.status(500).json({ message: error500Message });
        }
};

module.exports = {
createUser,
getAll,
getById,
};