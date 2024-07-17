const asyncHandler = require('../utils/asyncHandler');
const orderService = require('../services/orderService');
const ApiResponse = require('../utils/apiResponse');

exports.createOrder = asyncHandler(async (req, res) => {
  const order = await orderService.createOrder(req.body);
  res.status(201).json(new ApiResponse(201, order, 'Order created successfully'));
});

exports.getOrders = asyncHandler(async (req, res) => {
  const orders = await orderService.getOrders(req.query);
  res.status(200).json(new ApiResponse(200, orders, 'Orders retrieved successfully'));
});

exports.getOrderById = asyncHandler(async (req, res) => {
  const order = await orderService.getOrderById(req.params.id);
  res.status(200).json(new ApiResponse(200, order, 'Order retrieved successfully'));
});

exports.updateOrder = asyncHandler(async (req, res) => {
  const order = await orderService.updateOrder(req.params.id, req.body);
  res.status(200).json(new ApiResponse(200, order, 'Order updated successfully'));
});

exports.deleteOrder = asyncHandler(async (req, res) => {
  await orderService.deleteOrder(req.params.id);
  res.status(200).json(new ApiResponse(200, null, 'Order deleted successfully'));
});