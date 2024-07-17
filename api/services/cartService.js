const Cart = require('../models/Cart');
const ApiError = require('../utils/apiError');

exports.createCart = async (cartData) => {
  return Cart.create(cartData);
};

exports.getCartByUserId = async (userId) => {
  const cart = await Cart.findOne({ userId });
  if (!cart) {
    throw new ApiError(404, 'Cart not found');
  }
  return cart;
};

exports.updateCart = async (id, updateData) => {
  const cart = await Cart.findByIdAndUpdate(id, updateData, { new: true });
  if (!cart) {
    throw new ApiError(404, 'Cart not found');
  }
  return cart;
};

exports.deleteCart = async (id) => {
  const cart = await Cart.findByIdAndDelete(id);
  if (!cart) {
    throw new ApiError(404, 'Cart not found');
  }
  return cart;
};