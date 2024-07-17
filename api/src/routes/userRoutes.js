const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken, authorize } = require('../middlewares/auth');

router.get('/', verifyToken, authorize('admin',true), userController.getUsers);
router.get('/:id', verifyToken, userController.getUserById);
router.put('/:id', verifyToken, userController.updateUser);
router.delete('/:id', verifyToken, authorize('admin',true), userController.deleteUser);

module.exports = router;