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
const Promise = require('promise');

// Private Auth route
router.get('/dashboard', passport.authenticate('jwt', { session: false }), (req, res) => {
  User.findById(req.user.id).then(user => {
    if (!user) { return res.status(404).json({ email: 'Failed to get information for user' }); }

    getUserInfoAndToken(res, user, false);
  })
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
                getUserInfoAndToken(res, newUser, true);
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
            getUserInfoAndToken(res, user, true);
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
  GET /api/users/:id
*/
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).json({invalidUser: 'User does not exist!'});
      }
      getUserInfoAndToken(res, user)
      // Sending an array of the user's task
      Task.find({user: user._id}).then(tasks => {
        let obj = {}
        obj[user._id] = tasks;
        res.json(obj);
      });
  });
});

// Helper function to return necessary information for the frontend.
function getUserInfoAndToken(res, user, needToken) {
  const payload = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  };

  let findCompany = new Promise((resolve, reject) => {
    let payload = {};
    payload.company = {};
    payload.industry = {};
    Company.findOne({ _id: user.company }, "id name industry", (error, result) => {
      if (error) reject(error);
      payload.company = result;
    }).exec(() => {
      Industry.findById(payload.company.industry, "id, name", (error, results) => {
        payload.industry = results;
        resolve(payload);
      });
    });
  });

  let findTasks = new Promise((resolve, reject) => {
    Task.find({ user: payload.id }, 'user transcript date results', (error, result) => {
      if (error) reject(error);
      resolve(result);
    });
  });

  let findMyPerformance = new Promise((resolve, reject) => {
    Performance.find({ user: payload.id }, null, (error, results) => {
      if (error) reject(error);
      resolve(results);
    });
  });

  let findSubordinates = new Promise((resolve, reject) => {

    User.find({ manager: payload.id }, "id firstName lastName email", (error, results) => {
      if (error) reject(error);
      // payload.subordinates = results;
      resolve(results);
    });
  });

  let promises = [findCompany, findTasks, findMyPerformance, findSubordinates];
  
  let company, industry, tasks, myPerformances, subordinates, subordinatePerformances;

  Promise.all(promises)
    .then((array) => {
      company = array[0].company;
      industry = array[0].industry;
      tasks = array[1];
      myPerformances = array[2];
      subordinates = array[3];
    })
    .then(() => {
      let ids = subordinates.map(sub => sub._id);
      Performance.find({user: ids}, null, (error, results) => {
        subordinatePerformances = results;
      })
      .exec(() => {
        if (needToken) {
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
                  manager: (subordinates.length > 0),
                  token: "Bearer " + token,
                  userId: payload.id,
                  firstName: payload.firstName,
                  lastName: payload.lastName,
                  email: payload.email,
                  myTasks: tasks,
                  myPerformances,
                  subordinates
                },
                company,
                industry,
                subordinatePerformances
              });
            }
          );
        } else {
          res.json({
            currentUser: {
              success: true,
              manager: (subordinates.length > 0),
              userId: payload.id,
              firstName: payload.firstName,
              lastName: payload.lastName,
              email: payload.email,
              myTasks: tasks,
              myPerformances,
              subordinates
            },
            company,
            industry,
            subordinatePerformances
          });
        }
      });
    });
}



module.exports = router;