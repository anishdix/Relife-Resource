const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ApiError = require('../utils/apiError');
const { JWT_SECRET, JWT_EXPIRE, SALT_ROUNDS } = require('../config/config');

exports.register = async (userData) => {
  const { username, email, password } = userData;

  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    throw new ApiError(400, 'Username or email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const user = await User.create({
    username,
    email,
    password: hashedPassword
  });

  return createToken(user);
};

exports.login = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new ApiError(401, 'Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new ApiError(401, 'Invalid credentials');
  }

  
  return {user,token:createToken(user)};
};

const createToken = (user) => {
  return jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRE }
  );
};