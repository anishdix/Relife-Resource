const jwt = require('jsonwebtoken');
const ApiError = require('../utils/apiError');
const { JWT_SECRET } = require('../config/config');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  // console.log(req.headers.authorization?.split(' ')[1])
  if (!token) {
    return next(new ApiError(401, 'No token provided'));
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    next(new ApiError(403, 'Invalid token'));
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.isAdmin)) {
      console.log('User role:', req.user.isAdmin); 
    console.log('Allowed roles:', roles);
      return next(new ApiError(403, 'You do not have permission to perform this action'));
    }
    next();
  };
};

module.exports = { verifyToken, authorize };