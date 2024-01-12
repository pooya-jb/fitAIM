'use strict';

const express = require('express');
const userController = require('./controllers/User.controller');

const router = express.Router();

router.get('', (req, res) => {
  res.json('Welcome to FitAIM server!');
});

router.post('/register', userController.register);

module.exports = router;
