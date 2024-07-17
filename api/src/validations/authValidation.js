const Joi = require('joi');

const register = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

const login = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
});

module.exports = {
  register,
  login
};