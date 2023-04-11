const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const authenticate = async (email, password) => {
const user = await User.findOne({
  where: { email, password },
  attributes: { excludes: ['password'] },
});

if (!user) return { message: 'Invalid fields' };

const token = generateToken(user.dataValues);
return token;
};

module.exports = { authenticate };