const express = require('express');
const router = express.Router();
const stripeController = require('../controllers/stripeController');
const { verifyToken } = require('../middlewares/auth');
const validate = require('../middlewares/validate');
const { createPayment } = require('../validations/stripeValidation');

router.post('/payment', verifyToken, validate(createPayment), stripeController.createPayment);

module.exports = router;