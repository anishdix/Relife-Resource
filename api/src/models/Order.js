const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },  
  products: [
    {
      productId: { type: String },
      quantity: { type: Number, default: 1 },
    },
  ],
  amount: { type: Number },
  address: { type: Object },
  status: { type: String, default: 'pending' },
}, { timestamps: true });

// Ensure the index is not unique
OrderSchema.index({ userId: 1 }, { unique: false });

module.exports = mongoose.model('Order', OrderSchema);