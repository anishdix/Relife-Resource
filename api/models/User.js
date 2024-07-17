const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  img: { type: String, default: "https://www.bluelife.mu/wp-content/uploads/2016/07/Empty-profile-photo-1024x1024.png" },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);