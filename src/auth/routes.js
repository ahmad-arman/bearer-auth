'use strict';

const express = require('express');
const authRouter = express.Router();
// const server =require('../server.js')
const session =require('express-session')
const app = express();
app.use(session({secret:"ahmadarman123",  resave :false ,saveUninitialized:true}))

const User = require('./models/users.js');
const basicAuth = require('./middleware/basic.js')
const bearerAuth = require('./middleware/bearer.js');
const { token } = require('morgan');

authRouter.post('/signup', async (req, res, next) => {
  try {
    let user = new User(req.body);
    const userRecord = await user.save();
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output);
  } catch (e) {
    next(e.message)
  }
});

authRouter.post('/signin', basicAuth, (req, res, next) => {
 
  res.cookie('token',req.user.token, { expires: new Date(Date.now() + 10000), httpOnly: true });

  const user = {
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user);
});

authRouter.get('/users', bearerAuth, async (req, res, next) => {
  const users = await User.find({});
  const list = users.map(user => user.username);
  res.status(200).json(list);
});

authRouter.get('/secret', bearerAuth, async (req, res, next) => {
  
  console.log(req.headers.authorization)
 
  // if(!req.session.user){
  //   res.status(401).send();
  // }
  res.status(200).send("Welcome to the secret area!")
});


module.exports = authRouter;
