const Product = require('../models/Product');
const ApiError = require('../utils/apiError');

exports.createProduct = async (productData) => {
  return Product.create(productData);
};

exports.getProductsByCategory = async (categories) => {
  let query = {};
  console.log(categories,1)
  if (categories) {
    query.categories = categories.category; 
  }
  console.log(query)
  // find({ categories: { $in: [qCategory], }, })
  const products = await Product.find(query);

  return products.map(product => ({
    inStock: product.inStock,
    _id: product._id,
    title: product.title,
    desc: product.desc,
    img: product.img,
    categories: product.categories,
    price: product.price,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt
  }));
};

exports.getProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    throw new ApiError(404, 'Product not found');
  }
  return product;
};
exports.getProducts = async (id) => {
  const product = await Product.find({});
  if (!product) {
    throw new ApiError(404, 'Product not found');
  }
  return product;
};

exports.updateProduct = async (id, updateData) => {
  const product = await Product.findByIdAndUpdate(id, updateData, { new: true });
  if (!product) {
    throw new ApiError(404, 'Product not found');
  }
  return product;
};

exports.deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    throw new ApiError(404, 'Product not found');
  }
  return product;
};