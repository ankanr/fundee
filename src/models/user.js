const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: [true, 'Username already taken'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password needs to minimum 6 characters'],
    validate(value) {
      if (value.includes('password')) {
        throw new Error('Password should be stronger!');
      }
    },
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email is already taken'],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  age: {
    type: Number,
    min: [13, 'You must be minimum 13 to be able to register'],
    default: 18,
    // required: [true, 'Age is required'],
    max: [115, 'Too old to be alive'],
  },
  phn: {
    type: String,
    validate(value) {
      if (!validator.isMobilePhone(value)) {
        throw new Error('Enter valid mobile number');
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// userSchema.methods.toJSON = function () {
//   const user = this;
//   const userObject = user.toObject();

//   delete userObject.password;
//   delete userObject.tokens;

//   return userObject;
// };

userSchema.methods.generateAuthToken = function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, 'fundeeapp');
  user.tokens = user.tokens.concat({ token });
  user.save();
};

userSchema.statics.findByCredentials = async (username, password) => {
  const user = await User.findOne({ username });

  if (!user) {
    throw 'No user found';
  }

  const isMatch = await bcrypt.compare(password, user.password.toString());
  console.log(isMatch);

  if (!isMatch) {
    throw 'Unable to login';
  }

  return user;
};

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
