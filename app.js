const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const express = require('express');
const app = express();


mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

