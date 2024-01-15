'use strict';
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    method: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
  })
);
app.use(express.json());
app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
