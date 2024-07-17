const Product = require('../models/Product');
const ApiError = require('../utils/apiError');

exports.createProduct = async (productData) => {
  return Product.create(productData);
};

exports.getProducts = async (query) => {
  return Product.find(query);
};

exports.getProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new ApiError(404, 'Product not found');
  }
  return product;
};

exports.updateProduct = async (id, updateData) => {
  const product = await Product.findByIdAndUpdate(id, updateData, { new: true });
  if (!product) {
    throw new ApiError(404, 'Product not found');
  }
  return product;
};

exports.deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    throw new ApiError(404, 'Product not found');
  }
  return product;
};