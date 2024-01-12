const mongoose = require('mongoose');
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'fitaim';

mongoose.connect(
  `mongodb://127.0.0.1:${DB_PORT}/${DB_NAME}`
  // callback is not supported any more!
  // ,
  // { useNewUrlParser: true, useUnidiedTopology: true }
  // (err) => {
  //   if (err) {
  //     console.log(`Sorry, something went wrong! ${err}`);
  //   } else {
  //     console.log(`Database connected @ port ${DB_PORT}`);
  //   }
  // }
);

module.exports = mongoose;
