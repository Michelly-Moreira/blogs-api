const jwt = require('jsonwebtoken');

const httpErrGenerator = (status, message) => ({
  status, message,
});

const secretKey = process.env.JWT_SECRET;

const configJWT = {
    expiresIn: '1m', // expira em 1 minuto
    algorithm: 'HS256',
  };
  // criando token
const generateToken = (payload) => {
    const token = jwt.sign(payload, secretKey, configJWT); 
    // console.log(token);
    return token;
};
/* generateToken({
    email: 'lewishamilton@gmail.com',
    password: '123456',
  }); */

  // verificando token para validação
  const validateToken = (token) => {
    if (!token) throw httpErrGenerator(401, 'Token not found');
    const isValid = jwt.verify(token, secretKey);
    // if (!isValid) throw httpErrGenerator(401, 'Expired or invalid token');
    return isValid;
  };

module.exports = {
  generateToken,
  validateToken,
};