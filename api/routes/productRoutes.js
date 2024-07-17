const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { verifyToken, authorize } = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { createProduct, updateProduct } = require('../validations/productValidation');

router.post('/', verifyToken, validate(createProduct), productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', verifyToken, authorize('admin',true), validate(updateProduct), productController.updateProduct);
router.delete('/:id', verifyToken, authorize('admin',true), productController.deleteProduct);

module.exports = router;