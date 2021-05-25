'use strict';

// const users = require('../models/users.js')

// module.exports = async (req, res, next) => {

//   if (!req.headers.authorization) { next('Invalid Login') }

//   try {

   

//     const token = req.headers.authorization.split(' ').pop();
//     const validUser = await users.authenticateWithToken(token);

//     req.user = validUser;
//     req.token = validUser.token;

//   } catch (e) {
//     res.status(403).send('Invalid Login');;
//   }
// }

const User = require('../models/users.js');

module.exports = async (req, res, next) => {
    if (!req.headers.authorization) {
        next('authorization header is not provided');
        return;
    }
    //Bearer token.string.l;kasdjf
    try {
        console.log('Auth header: ', req.headers.authorization);
        const token = req.headers.authorization
            .split(' ').pop();
        console.log('token: ', token);

        const user = await User.authenticateWithToken(token);
        console.log('user', user);

        req.user = user;
        next();
    } catch (error) {
      res.status(403).send('Invalid Login');
    }
}
