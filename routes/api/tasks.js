const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Task = require('../../models/Task');
const User = require('../../models/User');
const validateTaskInput = require('../../validation/task');

/* 
  Users can post Tasks if authorized. It will check if the task input is valid
  and create a new instance of Task and save into the database
*/
router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  const {errors, isValid} = validateTaskInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newTask = new Task({
    user: req.body.userId,
    transcript: req.body.transcript
  });

  newTask.save().then(task => res.json(task));
})

/* 
  Users can fetch a specific Task and see the associated Data and transcript
*/
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Task.findById(req.params.id)
      .then(task => res.json(task))
      .catch(error =>
        res.status(404).json({ noTaskFound: "No Task found with that Id" })
      );
  }
);

/* 
  Users can delete a Task
  Later need to check if user is a manager
*/
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Task.findById(req.params.id)
      .then(task => {
        taskOwner = User.findById(task.user);
        if (taskOwner.manager === req.user.id) {
          task.remove();
          res.json(task);
        }
      })
      .catch(error => 
        res.status(404).json({ noTaskFound: "No Task found with that Id" })
      );
  }
);

module.exports = router;