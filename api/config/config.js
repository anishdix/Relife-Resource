module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
    JWT_EXPIRE: process.env.JWT_EXPIRE || '3d',
    SALT_ROUNDS: 10
  };