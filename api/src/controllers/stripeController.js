const asyncHandler = require('../utils/asyncHandler');
const stripeService = require('../services/stripeService');
const ApiResponse = require('../utils/apiResponse');

exports.createPayment = asyncHandler(async (req, res) => {
  const { tokenId, amount } = req.body;
  const payment = await stripeService.createPayment(tokenId, amount);
  res.status(200).json(new ApiResponse(200, payment, 'Payment processed successfully'));
});