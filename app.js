const mongoose = require("mongoose");
const express = require('express');
const db = require("./config/keys").mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

  const port = process.env.PORT || 5000;