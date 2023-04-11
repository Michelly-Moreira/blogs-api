// middleware do joi
const { addUserSchema } = require('../joi/schema.user');

module.exports = (req, res, next) => {
  const user = req.body;
  const { error } = addUserSchema.validate(user);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};