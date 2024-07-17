const User = require('../models/User');
const ApiError = require('../utils/apiError');

exports.getUsers = async (query, limit) => {
  return User.find(query).limit(limit);
};

exports.getUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new ApiError(404, 'User not found');
  }
  return user;
};

exports.updateUser = async (id, updateData) => {
  const user = await User.findByIdAndUpdate(id, updateData, { new: true });
  if (!user) {
    throw new ApiError(404, 'User not found');
  }
  return user;
};

exports.deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    throw new ApiError(404, 'User not found');
  }
  return user;
};