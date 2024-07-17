const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { verifyToken } = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { createCart, updateCart } = require('../validations/cartValidation');

router.post('/', verifyToken, validate(createCart), cartController.createCart);
router.get('/:userId', verifyToken, cartController.getCartByUserId);
router.put('/:id', verifyToken, validate(updateCart), cartController.updateCart);
router.delete('/:id', verifyToken, cartController.deleteCart);

module.exports = router;