const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const ApiError = require('../utils/apiError');

exports.createPayment = async (tokenId, amount) => {
  try {
    const payment = await stripe.charges.create({
      source: tokenId,
      amount: amount,
      currency: 'usd',
    });
    return payment;
  } catch (error) {
    throw new ApiError(400, error.message);
  }
};