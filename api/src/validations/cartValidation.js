const Joi = require('joi');

// Validation schema for creating a cart
const createCart = Joi.object({
  userId: Joi.string().required(),
  products: Joi.array().items(
    Joi.object({
      productId: Joi.string().required(),
      quantity: Joi.number().integer().min(1).default(1),
    })
  ).required()
});

// Validation schema for updating a cart
const updateCart = Joi.object({
  products: Joi.array().items(
    Joi.object({
      productId: Joi.string().required(),
      quantity: Joi.number().integer().min(1).default(1),
    })
  ).required()
});

module.exports = {
  createCart,
  updateCart
};
