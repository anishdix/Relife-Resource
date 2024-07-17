const Joi = require('joi');

const createProduct = Joi.object({
  title: Joi.string().required(),
  desc: Joi.string().required(),
  img: Joi.string().uri().required(),
  categories: Joi.array().items(Joi.string()),
  price: Joi.number().min(0).required(),
  inStock: Joi.boolean()
});

const updateProduct = Joi.object({
  title: Joi.string(),
  desc: Joi.string(),
  img: Joi.string().uri(),
  categories: Joi.array().items(Joi.string()),
  price: Joi.number().min(0),
  inStock: Joi.boolean()
});

module.exports = {
  createProduct,
  updateProduct
};