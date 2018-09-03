const mongoose = require("mongoose");
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const vcapServices = require('vcap_services');
const app = express();

// config 
const db = require("./config/keys").mongoURI;

// Api routes
const users = require("./routes/api/users");
const tasks = require('./routes/api/tasks');
const industries = require('./routes/api/industries');
const companies = require('./routes/api/companies');

// Heroku
const path = require("path");

app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// Normal routes
// const Authentication = require('./routes/authentication');
const router = require('express').Router();

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.use(cors());

app.use(passport.initialize());
require("./config/passport")(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Api routes
app.use("/api/users", users);
app.use("/api/tasks", tasks);
app.use("/api/industries", industries);
app.use("/api/companies", companies);

app.listen(port, () => console.log(`Server is running on port ${port}`));