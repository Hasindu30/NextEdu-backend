const express = require('express');
const router = express.Router();
const { login } = require('../controllers/Auth/authController');

router.post('/login', login);

module.exports = router;
