const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Task = require('../../models/Task');
const User = require('../../models/User');
const Performance = require('../../models/Performance');
const validateTaskInput = require('../../validation/task');

const NaturalLanguageUnderstandingV1 = require("watson-developer-cloud/natural-language-understanding/v1.js");
const keys = require('../../config/keys');

/* 
  Users can post Tasks if authorized. It will check if the task input is valid
  and create a new instance of Task and save into the database.
  It will also fetch or create a new Performance to record the analysis results from IBM Watson.
*/
router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  const {errors, isValid} = validateTaskInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newTask = new Task({
    user: req.user.id,
    transcript: req.body.transcript
  });

  let apiCall = new NaturalLanguageUnderstandingV1({
    version: "2018-03-16",
    username: keys.emotionUsername,
    password: keys.emotionPassword
  });

  let parameters = {
    'text': newTask.transcript,
    "features": {
      "emotion": {},
      "keywords": {
        "emotion": true,
        "sentiment": true,
        "limit": 5
      },
      "sentiment": {}
    }
  }

  // Calling IBM Watson from Backend
  let results = {};
  apiCall.analyze(parameters, function(error, response) {
    if (error) {
      console.log('Failed to get transcript analyzed: ' + error);
      response.json({Fail: "Failed to analyze the transcript"});
    }
    else {
      results.sentiment = response.sentiment.document;
      results.keywords = response.keywords;
      results.entities = response.entities;
      results.emotion = response.emotion.document.emotion;
      newTask.results = results;

      // Find a performance (by user, month, and year) and update it
      // or create a new performance
      Performance.findOne({
        user: req.user.id,
        month: newTask.date.getMonth() + 1,
        year: newTask.date.getFullYear()
      })
        .then(performance => {
          let item = performance;
          if (item === null) {
            item = new Performance({
              tasks: 1,
              user: req.user.id,
              month: newTask.date.getMonth() + 1,
              year: newTask.date.getFullYear(),
              sentimentScore: results.sentiment.score,
              sadness: results.emotion.sadness,
              joy: results.emotion.joy,
              anger: results.emotion.anger,
              fear: results.emotion.fear,
              disgust: results.emotion.disgust
            });
          } else {
            item.tasks += 1;
            item.sentimentScore += results.sentiment.score;
            item.sadness += results.emotion.sadness;
            item.joy += results.emotion.joy;
            item.anger += results.emotion.anger;
            item.fear += results.emotion.fear;
            item.disgust += results.emotion.disgust;
          }
          if (results.sentiment.label === "positive") item.positive += 1;
          else if (results.sentiment.label === "negative") item.negative += 1;
          else item.neutral += 1;

          item.keywords = mapKeywords(item.keywords ? JSON.parse(item.keywords) : undefined, results.keywords);

          item.save().then(data => {
            newTask.save().then(task => res.json(task));
          });
        })
        .catch(error => {
          console.log("Failed to find or create a new performance: " + error);
        });
    }
  })
})

/* 
  Users can fetch a specific Task and see the associated Data and transcript
  /api/tasks/:id
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
      .then(task => 
        {
          taskOwner = User.findById(task.user);
          if (taskOwner.manager == req.user.id) {
            Performance.findOne({
              user: req.user.id,
              month: newTask.date.getMonth() + 1,
              year: newTask.date.getFullYear()
            }).then(performance => {
              let item = performance;
              if (item != undefined) {
                item.tasks -= 1;
                item.sentimentScore -= results.sentiment.score;
                item.sadness -= results.emotion.sadness;
                item.joy -= results.emotion.joy;
                item.anger -= results.emotion.anger;
                item.fear -= results.emotion.fear;
                item.disgust -= results.emotion.disgust;
              }
              if (results.sentiment.label === "positive") item.positive -= 1;
              else if (results.sentiment.label === "negative") item.negative -= 1;
              else item.neutral -= 1;

              item.keywords = removeKeywords(JSON.parse(item.keywords), task.results.keywords);

              item.save();
            });

            task.remove().then(res.json(task));
          } else {
            res.status(400).json({ invalidPrevilege: "User can't delete the task" })
          }
        })
      .catch(error => 
        res.status(404).json({ noTaskFound: "No Task found with that Id" })
      );
  }
);

function mapKeywords(hash, keywords) {
  if (keywords === undefined) return hash;
  let object = (hash === undefined) ? {} : hash;

  keywords.forEach(word => {
    if (object[word.text] === undefined) object[word.text] = 1;
    else object[word.text] += 1;
  });
  
  return JSON.stringify(object);
}

function removeKeywords(hash, keywords) {
  let object = hash;
  
  keywords.forEach(word => {
    object[word.text] -= 1;
    if (object[word.text] === 0) delete object[word.text];
  });
  
  return JSON.stringify(object);
}

module.exports = router;