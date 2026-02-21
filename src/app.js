const express = require('express');
const signupRouter = require('./routes/signup.route');
const loginRouter = require('./routes/login.route');
const app = express();

app.use(express.json());
app.use('/api/user', signupRouter);
app.use('/api/user', loginRouter);

module.exports = app;