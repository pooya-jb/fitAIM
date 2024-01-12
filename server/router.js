'use strict';

const express = require('express');

const router = express.Router();

router.get('', (req, res) => {
  res.send('Welcome to FitAIM server!');
});

module.exports = router;
