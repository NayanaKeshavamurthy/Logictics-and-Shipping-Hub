const express = require('express');

const { body } = require('express-validator');

const authController = require('../controllers/auth');

const router = express.Router();

const User = require('../models/user');

router.post(
  '/register', authController.register
);

router.post('/login',authController.login);

module.exports = router;