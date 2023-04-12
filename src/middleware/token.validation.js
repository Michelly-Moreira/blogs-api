const { validateToken } = require('../utils/auth');

/* const httpErrGenerator = (status, message) => ({
  status, message,
}); */

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const returnToken = validateToken(authorization);
    // console.log('retorno do token:', returnToken);
    req.user = returnToken;
    next();
  } catch (error) {
    console.log('oi');
    return res.status(401).json({ message: 'Expired or invalid token' });
    }  
  };

  module.exports = { tokenValidation };