const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.model');
const SECRET_KEY = process.env.SECRET_KEY || 'development key';

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ error: '400', message: 'Missing fields!' });
  }
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      console.log('User found');
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) throw new Error('Password is wrong!');
    const accessToken = jwt.sign({ _id: user._id }, SECRET_KEY);
    res.status(200).send({
      accessToken,
      userData: {
        name: user.name,
        email: user.email,
        information: user.information,
      },
    });
  } catch (error) {
    console.log('Error finding user:', error);
    res
      .status(401)
      .send({ error: '401', message: 'Usernamr or password wrong!' });
  }
};

const register = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(400).send({ error: '400', message: 'Missing fields!' });
  }
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      return res
        .status(409)
        .send({ error: '409', message: 'User already exists!' });
    }
    if (password === '') throw new Error('Password is missing!');
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      ...req.body,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    const accessToken = jwt.sign({ _id: savedUser._id }, SECRET_KEY);
    console.log(savedUser);
    res.status(201).send({
      accessToken,
      userData: {
        email: savedUser.email,
        name: savedUser.name,
        information: savedUser.information,
      },
    });
  } catch (error) {
    res.status(400).send({ error, message: 'Could not register user!' });
  }
};

module.exports = { login, register };
