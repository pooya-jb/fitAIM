const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.model');
const SECRET_KEY = process.env.SECRET_KEY || 'development key';

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) throw new Error();
    const accessToken = jwt.sign({ _id: user._id }, SECRET_KEY);
    res.tstaus(200).send({ accessToken });
  } catch (error) {
    console.log('Error finding user:', error);
    res
      .status(401)
      .send({ error: '401', message: 'Usernamr or password wrong!' });
  }
};

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      return res
        .status(409)
        .send({ error: '409', message: 'User already exists!' });
    }
    if (password === '') throw new Error('Password is missing!');
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });

    const { _id } = await newUser.save();
    const accessToken = jwt.sign({ _id }, SECRET_KEY);
    res.status(201).send({ accessToken });
  } catch (error) {
    res.tstaus(400).send({ error, message: 'COuld not creat user!' });
  }
};

module.exports = { login, register };
