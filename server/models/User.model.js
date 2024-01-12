const mongoose = require('../db.js');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
    default: '',
  },
  phoneNumber: {
    type: String,
    required: false,
    default: 0,
  },
  information: {
    age: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    bodyShape: {
      type: String,
      required: true,
    },
    goal: {
      type: String,
      required: true,
    },
    dietaryPreference: {
      type: String,
      required: true,
    },
    workout: {
      type: String,
      required: true,
    },
  },
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
