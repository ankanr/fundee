const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: [true, 'Username is already taken'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password needs to minimum 6 characters'],
    // validate(value) {
    //   if (value.includes('password')) {
    //     throw new Error('Password should be stronger!');
    //   }
    // },
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email is already taken'],
    // validate(value) {
    //   if (!validator.isEmail(value)) {
    //     throw new Error('Email is invalid');
    //   }
    // },
  },
  age: {
    type: Number,
    min: [13, 'You must be minimum 13 to be able to register'],
    required: [true, 'Age is required'],
    max: [115, 'Too old to be alive'],
  },
  phn: {
    type: String,
    // validate(value) {
    //   if (!validator.isMobilePhone(value)) {
    //     throw new Error('Enter valid mobile number');
    //   }
    // },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
