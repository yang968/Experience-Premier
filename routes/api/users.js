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
const Industry = require('../../models/Industry');
const Performance = require('../../models/Performance');
const Promise = require('promise')

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
    // emotionPassword: process.env.emotionPassword
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

router.post('/logout', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { user } = req;
    const { rawHeaders } = req;
    const tokenIndex = rawHeaders.findIndex((el) => el === 'Authorization') + 1;
    const token = rawHeaders[tokenIndex].split(" ")[1];
    let sess;

    UserSession.find({userId: user._id})
    .then((session) => {
      sess = session;
      if (session.length === 0) {
        return res.status(400).json({
          error: "Could not logout, user session not found"
        });
      } else {
      UserSession.findOneAndRemove(
        sess, 
        (session1) => {
          return res.send({
            success: true,
            message: 'Thank you for visiting!'
          });
        });
      }
    });
  }
);

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

// Helper function to return necessary information for the frontend.
function getUserInfoAndToken(res, user) {
  const payload = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  };

  // Constants.
  let company = {};
  let industry = {};
  let taskObj = {};
  let filteredSubInfo = [];
  let myPerformances = [];
  let subordinatePerformances = {};

  let findCompany = new Promise((resolve, reject) => {
    Company.findOne({ _id: user.company }, "id name", (error, result) => {
      resolve(result);
    })
  });

  let findIndustry = new Promise((resolve, reject) => {
    Industry.findOne({ _id: company.industry }, "id name", (error, result) => {
      resolve(result);
    })
  });

  let findTasks = new Promise((resolve, reject) => {
    Task.find({ user: payload.id }, 'user transcript date results', (error, result) => {
      if (error) reject(error);
      resolve(result);
    })
  });

  let findMyPerformance = new Promise((resolve, reject) => {
    Performance.find({ user: payload.id }, null, (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });

  let findSubordinatesInfo = new Promise((resolve, reject) => {
    User.find({ manager: payload.id }, "firstName lastName email", (error, subordinates) => {
        let payload = {};
        payload.subordinates = subordinates;
        subordinates.forEach(subordinate => {

          payload.tasks = {};
          Task.find({ user: subordinate._id }, "user transcript date results", (error, tasks) => {
              // taskObj[subordinate._id] = tasks;
              payload.tasks[subordinate._id] = tasks;
            }
          );

          payload.subordinatePerformances = {};
          Performance.find({ user: subordinate._id }, null, (error, results) => {
              // subordinatePerformances[subordinate._id] = results;
              payload.subordinatePerformances[subordinate._id] = results;
            }
          );
        });
        resolve(payload);
      }
    );
  })

  let promises = [findCompany, findIndustry, findTasks, findMyPerformance, findSubordinatesInfo];
  
  Promise.all(promises)
    .then((array) => {
      taskObj = Object.assign({}, array[2], array[4].tasks);
      
      jsonwebtoken.sign(
      payload,
      keys.secretOrKey,
      { expiresIn: "24h" },
      (err, token) => {
        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.token = token;
        userSession.save((error, doc) => {
          if (error) {
            return res.send({
              success: false,
              message: "Error: server error"
            });
          }
        });
        res.json({
          currentUser: {
            success: true,
            token: "Bearer " + token,
            userId: payload.id,
            FirstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            myPerformances: array[3],
            subordinates: array[4].subordinates
          },
          company: array[0],
          industry: array[1],
          tasks: taskObj,
          subordinatePerformances: array[4].subordinatePerformances
        });
      }
    )}
  );
}



module.exports = router;