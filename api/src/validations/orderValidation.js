const Joi = require('joi');

// Validation  for creating an order
const createOrder = Joi.object({
  userId: Joi.string().required(),
  products: Joi.array().items(
    Joi.object({
      productId: Joi.string().required(),
      quantity: Joi.number().integer().min(1).default(1),
    })
  ).required(),
  amount: Joi.number().required(),
  address: Joi.object().default({
    city:"mangalore"
  }),
  status: Joi.string().valid('pending', 'shipped', 'delivered', 'cancelled').default('pending')
});

// Validation  for updating an order
const updateOrder = Joi.object({
  products: Joi.array().items(
    Joi.object({
      productId: Joi.string().required(),
      quantity: Joi.number().integer().min(1).default(1),
    })
  ),
  amount: Joi.number(),
  address: Joi.object(),
  status: Joi.string().valid('pending', 'shipped', 'delivered', 'cancelled')
});

module.exports = {
  createOrder,
  updateOrder
};
