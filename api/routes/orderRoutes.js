const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { verifyToken, authorize } = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { createOrder, updateOrder } = require('../validations/orderValidation');

router.post('/', verifyToken, validate(createOrder), orderController.createOrder);
router.get('/', verifyToken, authorize('admin',true), orderController.getOrders);
router.get('/:id', verifyToken, orderController.getOrderById);
router.put('/:id', verifyToken, validate(updateOrder), orderController.updateOrder);
router.delete('/:id', verifyToken, authorize('admin',true), orderController.deleteOrder);

module.exports = router;