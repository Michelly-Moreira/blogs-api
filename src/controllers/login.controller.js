const { loginService } = require('../services');

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const login = await loginService.authenticate(email, password);
        // console.log(login);
        return res.status(200).json({ token: login });
    } catch (error) {
        console.log(error);
        if (error.status) { 
            return res.status(error.status).json({ message: error.message });
        }
        return res.status(500).json({ message: 'internal error' });
    }
};
/* signin({
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }); */
module.exports = { signin };