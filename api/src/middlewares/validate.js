const Joi = require('joi');
const ApiError = require('../utils/apiError');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  
  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(', ');
    return next(new ApiError(400, errorMessage));
  }
  
  next();
};

module.exports = validate;