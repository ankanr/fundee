const express = require('express');
const User = require('../models/user');
const router = new express.Router();
const auth = require('../middleware/auth.js');

router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    const token = user.generateAuthToken();
    res.send({ user, token });
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
    res.send({ user, token });
  } catch (e) {
    res.send(e);
  }
});

router.post('/logout', auth, async (req, res) => {
  try {
    req.user.token = '';
    await req.user.save();
    res.send('Logged Out!');
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.post('/donate', auth, async (req, res) => {
  try {
    const donation = parseInt(req.body.donation);
    req.user.donations = req.user.donations.concat({
      donation,
    });
    await req.user.save();
    res.send('Thank You for your donation');
  } catch (e) {
    console.log(e);
    res.send(e);
  }
});

module.exports = router;
