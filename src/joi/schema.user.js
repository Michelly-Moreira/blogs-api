const Joi = require('joi');
// definindo o esboço do Joi, mapeando na label os campos que o Joi valida

const validateUser = Joi.object({
    displayName: Joi.string().min(8)
    .required()
    .label('displayName'),
    email: Joi.string().email().unique()
    .required()
    .label('email'),
    password: Joi.string().min(6)
    .required()
    .label('password'),
    image: Joi.string()
    .label('image'),
}).messages({
    'number.min': '{{#label}} length must be at least {{#limit}} characters long',
    'value.invalid': '{{#label}} must be a valid email',
    'not.unique': 'User already registered',
});

module.exports = {
  validateUser,
};
