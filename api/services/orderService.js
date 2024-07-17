const Order = require('../models/Order');
const ApiError = require('../utils/apiError');

exports.createOrder = async (orderData) => {
  return Order.create(orderData);
};

exports.getOrders = async (query) => {
  return Order.find(query);
};

exports.getOrderById = async (id) => {
  const order = await Order.findById(id);
  if (!order) {
    throw new ApiError(404, 'Order not found');
  }
  return order;
};

exports.updateOrder = async (id, updateData) => {
  const order = await Order.findByIdAndUpdate(id, updateData, { new: true });
  if (!order) {
    throw new ApiError(404, 'Order not found');
  }
  return order;
};

exports.deleteOrder = async (id) => {
  const order = await Order.findByIdAndDelete(id);
  if (!order) {
    throw new ApiError(404, 'Order not found');
  }
  return order;
};