const express = require('express');
const User = require('../models/user');
const router = new express.Router();
const auth = require('../middleware/auth.js');

router.post('/register', async (req, res) => {
  const user = new User(req.body);
  try {
    user.generateAuthToken();
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.username,
      req.body.password
    );

    const token = user.generateAuthToken();
    localStorage.setItem('Auth', token);
    res.send({ user, token });
  } catch (e) {
    res.send(e);
  }
});

router.post('/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
