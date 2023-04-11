const loginService = require('../services');

const signin = async (req, res) => {
    const { email, password } = req.body;
    const login = await loginService.authenticate(email, password);
    if (login.message) return res.status(400).json({ message: 'Invalid fields' });
    return res.status(200).json({ token: login });
};

module.exports = { signin };