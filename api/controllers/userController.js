const asyncHandler = require('../utils/asyncHandler');
const userService = require('../services/userService');
const ApiResponse = require('../utils/apiResponse');

exports.getUsers = asyncHandler(async (req, res) => {
  const users = await userService.getUsers(req.query);
  res.status(200).json(new ApiResponse(200, users, 'Users retrieved successfully'));
});

exports.getUserById = asyncHandler(async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.status(200).json(new ApiResponse(200, user, 'User retrieved successfully'));
});

exports.updateUser = asyncHandler(async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  res.status(200).json(new ApiResponse(200, user, 'User updated successfully'));
});

exports.deleteUser = asyncHandler(async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.status(200).json(new ApiResponse(200, null, 'User deleted successfully'));
});