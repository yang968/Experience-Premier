const express = require("express");
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const router = express.Router();
const mongoose = require('mongoose');

// Fetch the username and key for API here
const keys = require('../../config/keys');

// importing User model
const User = require('../../models/User');
const Task = require('../../models/Task');
const UserSession = require('../../models/Session');
const Company = require('../../models/Company');

// Private Auth route
router.get('/overview', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
    // Send username and key for API here to the Frontend user
    // use env vars for Heroku deployment
    // emotionUsername: process.env.emotionUsername
    emotionUsername: keys.emotionUsername,
    emotionPassword: keys.emotionPassword
  });
});

// New user.
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) { return res.status(400).json(errors); }

  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res.status(400).json({
          email: "A user has already registered with this address"
        });
      } else {
        // Otherwise create a new user
        const newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          company: mongoose.Types.ObjectId(req.body.company),
          email: req.body.email,
          password: req.body.password,
          manager: req.body.manager === '' ? null : mongoose.Types.ObjectId(req.body.manager)
        });
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(() => {
                // helper function that gives user's info with user token
                getUserInfoAndToken(res, newUser);
              })
              .catch(err1 => console.log(err1));
          });
        });
      }
    });
});

// Returning User.
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) { return res.status(400).json(errors);}

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) { return res.status(404).json({ email: 'This user does not exist' });}

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {

          // Update Session with current user. / For frontend to check with backend.
          const userSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                  if (err) {
                    console.log(err);
                    return res.send({
                      success: false,
                      message: 'Error: server error'
                    });
                 }
              });

            // helper function that gives user's info with user token
            getUserInfoAndToken(res, user);
          } else {
            return res.status(400).json({
              password: 'Incorrect password'
            });
          }
        });
    });
});

/* 
  Get all tasks for a user id. 
*/
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).json({invalidUser: 'User does not exist!'});
      }

      Task.find({user: user._id}).then(tasks => {
        let obj = {}
        obj[user._id] = tasks;
        res.json(obj);
      });
  });
});


// helper functions
function getUserInfoAndToken(res, user) {
  const payload = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  };

  findCompany(user);

  let managerId = mongoose.Types.ObjectId(user._id);
  const filteredSubInfo = [];

  User.find({ manager: managerId })
    .then(subs => {
      subs.forEach((sub) => {
        // Add subordinate info here.
        filteredSubInfo.push({
          id: sub._id,
          firstName: sub.firstName,
          lastName: sub.lastName,
          email: sub.email
        });
    });
  }).then(() =>
    jsonwebtoken.sign(payload, keys.secretOrKey,
    // Tell the key to expire in one hour
    { expiresIn: "24h" },
    (err, token) => {
      res.json({
        currentUser: {
          success: true,
          token: 'Bearer ' + token,
          userId: payload.id,
          FirstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
          subordinates: filteredSubInfo
        },
        company: {}
      });
    })
  );
}

function findCompany(user) {
  const companyId = mongoose.Types.ObjectId(user.company);
  console.log(companyId);
  Company.find({_id: companyId})
    .then((company) => console.log(company));
}




module.exports = router;