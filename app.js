const mongoose = require("mongoose");
const express = require('express');
const router = require('express').router();
const app = express();
const db = require("./config/keys").mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/api/users");
const tasks = require('./routes/api/tasks');
const industries = require('./routes/api/industries');
const companies = require('./routes/api/companies');
const Authentication = require('./routes/authentication');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.use(passport.initialize());
require("./config/passport")(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Normal routes
router.get('/register', Authentication.register);
router.get('/login', Authentication.login);

// Api routes
app.use("/api/users", users);
app.use("/api/tasks", tasks);
app.use("/api/industries", industries);
app.use("/api/companies", companies);

app.listen(port, () => console.log(`Server is running on port ${port}`));