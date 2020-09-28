const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
  try {
    const token = localStorage.getItem('Auth');
    console.log(token);
    const decoded = jwt.verify(token, 'fundeeapp');
    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token,
    });
    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.send({ error: 'Please authenticate.' });
  }
};

module.exports = auth;
