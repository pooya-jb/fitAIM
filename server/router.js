'use strict';

const express = require('express');
const userController = require('./controllers/User.controller');
const openAIController = require('./controllers/OpenAI.controller');

const router = express.Router();

router.get('', (req, res) => {
  res.json('Welcome to FitAIM server!');
});

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/openai', openAIController.fetchDataAPI);

module.exports = router;
