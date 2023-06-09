const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const httpErrGenerator = (status, message) => ({
    status, message,
  });

const create = async (displayName, email, password, image) => {
const user = await User.findOne({
        where: { email, password },
        attributes: { exclude: ['password'] },
      });
// se o usuário já estiver cadastrado
if (user) throw httpErrGenerator(409, 'User already registered');

// cadastrando o usuário caso não esteja cadastrado
const newUser = await User.create({ displayName, email, password, image });

// geração do token
const token = generateToken(newUser.dataValues);
// retornando o token para o endpoint
// console.log(token);
return token;
};

const getAll = async () => {
  const allUsers = await User.findAll({
  attributes: { exclude: ['password'] },
});
return allUsers;
};

const getById = async (id) => {
const byId = await User.findByPk(
  id,
  ({ attributes: { exclude: ['password'] } }),
  );
return byId;
};

module.exports = {
    create,
    getAll,
    getById,
};