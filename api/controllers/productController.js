const asyncHandler = require('../utils/asyncHandler');
const productService = require('../services/productService');
const ApiResponse = require('../utils/apiResponse');

exports.createProduct = asyncHandler(async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.status(201).json(new ApiResponse(201, product, 'Product created successfully'));
});

exports.getProducts = asyncHandler(async (req, res) => {
  const products = await productService.getProducts(req.query);
  res.status(200).json(new ApiResponse(200, products, 'Products retrieved successfully'));
});

exports.getProductById = asyncHandler(async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  res.status(200).json(new ApiResponse(200, product, 'Product retrieved successfully'));
});

exports.updateProduct = asyncHandler(async (req, res) => {
  const product = await productService.updateProduct(req.params.id, req.body);
  res.status(200).json(new ApiResponse(200, product, 'Product updated successfully'));
});

exports.deleteProduct = asyncHandler(async (req, res) => {
  await productService.deleteProduct(req.params.id);
  res.status(200).json(new ApiResponse(200, null, 'Product deleted successfully'));
});