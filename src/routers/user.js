const express = require('express');
const User = require('../models/user');
const router = new express.Router();

router.post('/users', (req, res) => {
  const user = new User(req.body);
  try {
    user.save();
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
