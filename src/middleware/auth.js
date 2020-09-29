const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
  try {
    const token = req.header('authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'fundeeapp');
    const user = await User.findOne({
      _id: decoded._id,
      token: token,
    });
    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.send('You are not logged in!!');
  }
};

module.exports = auth;
