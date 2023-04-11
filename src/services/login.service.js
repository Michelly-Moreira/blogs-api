const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const httpErrGenerator = (status, message) => ({
  status, message,
});

const authenticate = async (email, password) => {
  // email deve estar cadastrado
const user = await User.findOne({
  where: { email, password },
  attributes: { excludes: ['password'] },
});
if (!user) throw httpErrGenerator(400, 'Invalid fields');
// geração do token
const token = generateToken(user.dataValues);
// retornando o token para o endpoint
return token;
};

module.exports = { authenticate };