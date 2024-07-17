const Joi = require('joi');

const createPayment = Joi.object({
  tokenId: Joi.string().required(),
  amount: Joi.number().positive().required()
});

module.exports = {
  createPayment
};