const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('./db/mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user');
const ngoRouter = require('./routers/ngo');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(cookieParser('fundeeapp'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user', userRouter);
app.use('/ngo', ngoRouter);

app.listen(port, () => {
  console.log('Server up on port ', port);
});
