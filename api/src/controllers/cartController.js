const asyncHandler = require('../utils/asyncHandler');
const cartService = require('../services/cartService');
const ApiResponse = require('../utils/apiResponse');

exports.createCart = asyncHandler(async (req, res) => {
  const cart = await cartService.createCart(req.body);
  res.status(201).json(new ApiResponse(201, cart, 'Cart created successfully'));
});

exports.getCartByUserId = asyncHandler(async (req, res) => {
  const cart = await cartService.getCartByUserId(req.params.userId);
  res.status(200).json(new ApiResponse(200, cart, 'Cart retrieved successfully'));
});

exports.updateCart = asyncHandler(async (req, res) => {
  const cart = await cartService.updateCart(req.params.id, req.body);
  res.status(200).json(new ApiResponse(200, cart, 'Cart updated successfully'));
});

exports.deleteCart = asyncHandler(async (req, res) => {
  await cartService.deleteCart(req.params.id);
  res.status(200).json(new ApiResponse(200, null, 'Cart deleted successfully'));
});