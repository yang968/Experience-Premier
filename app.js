const mongoose = require("mongoose");
const express = require('express');
const db = require("./config/keys").mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');

//Port Number : 5000
const port = process.env.PORT || 5000;

// Connecting mlab DB with MongoDB.
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
  