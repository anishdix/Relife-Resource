const asyncHandler = require('../utils/asyncHandler');
const ApiResponse = require('../utils/apiResponse');
const authService = require('../services/authService');

exports.register = asyncHandler(async (req, res) => {
  const token = await authService.register(req.body);
  res.status(201).json(new ApiResponse(201, { token }, 'User registered successfully'));
});

exports.login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const data = await authService.login(username, password);
  // console.log(data);
  res.status(200).json(new ApiResponse(200, data, 'Logged in successfully'));
});