'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');

const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Adds a virtual field to the schema. We can see it, but it never persists
// So, on every user object ... this.token is now readable!
users.virtual('token').get(function () {
  let tokenObject = {
    username: this.username,
  }
  
  let ahmad = jwt.sign(tokenObject,process.env.SECRET, { expiresIn: '1d' })
  console.log('virtual',ahmad);
  
  return ahmad;
});
// userSchema.virtual('token').get(function () {
//   return jwt.sign({ username: this.username, test: 'test' }, SECRET);
// });


users.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  console.log(this.password, "this password")
});

// BASIC AUTH
users.statics.authenticateBasic = async function (username, password) {
  const user = await this.findOne({ username })
  const valid = await bcrypt.compare(password, user.password)
  if (valid) { return user; }
  throw new Error('Invalid User');
}


// users.statics.authenticateWithToken =
//     async function (token) {
//         try {
//             const payload = jwt.verify(token, SECRET);
//             console.log('payload', payload);

//             const user = await this.findOne({
//                 username: payload.username
//             });
//             console.log('user', user);

//             if (user) {
//                 return user;
//             } else {
//                 throw new Error('invalid username from token');
//             }
//         } catch (error) {
//             throw new Error(error.message);
//         }
//     }

//BEARER AUTH
users.statics.authenticateWithToken = async function (token) {
  try {
    console.log(token , 'aaaaaaaaaaaaaaaaaa');
    // for (let index = 0; index < 1; index++) {
      
      
    // }
    const parsedToken = jwt.verify(token, process.env.SECRET);
    const user = this.findOne({ username: parsedToken.username })
    if (user) { return user; }
    throw new Error("User Not Found");
  } catch (e) {
    throw new Error(e.message)
  }
}


module.exports = mongoose.model('users', users);
