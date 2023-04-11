const { validateToken } = require('../utils/auth');

const tokenValidation = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const returnToken = validateToken(authorization);
    // console.log('retorno do token:', returnToken);
    req.user = returnToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
    }  
  };

  module.exports = { tokenValidation };