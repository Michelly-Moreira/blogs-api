const { userService } = require('../services');

const createUser = async (req, res) => {
try {
    const { displayName, email, password, image } = req.body;
    const newUser = await userService.create(displayName, email, password, image);
    console.log(newUser);
    return res.status(201).json({ token: newUser });
} catch (error) {
    console.log(error.message);
    if (error.status) {
        return res.status(error.status).json({ message: error.message });
    }
    return res.status(500).json({ message: 'internal error' });
    }
};

const getAll = async (_req, res) => {
    const getAllUsers = await userService.getAll();
    return res.status(200).json(getAllUsers);
};

module.exports = {
createUser,
getAll,
};