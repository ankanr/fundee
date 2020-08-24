import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017', {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
