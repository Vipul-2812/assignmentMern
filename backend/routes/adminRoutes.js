const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { registerValidator, loginValidator } = require('../validators/adminValidators');

// Admin registration and login routes
router.post('/register', registerValidator, adminController.register);
router.post('/login', loginValidator, adminController.login);

module.exports = router;

