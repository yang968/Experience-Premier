const mongoose = require("mongoose");
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const watson = require('watson-developer-cloud');
const vcapServices = require('vcap_services');
const app = express();

// config 
const db = require("./config/keys").mongoURI;
// const watsonUsername = require("./config/keys").username
// const watsonPassword = require("./config/keys").password
const azure = require('./config/keys').azure;

// Api routes
const users = require("./routes/api/users");
const tasks = require('./routes/api/tasks');
const industries = require('./routes/api/industries');
const companies = require('./routes/api/companies');

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

// // Normal routes
// router.get('/register', Authentication.register);
// router.get('/login', Authentication.login);

// Api routes
app.use("/api/users", users);
app.use("/api/tasks", tasks);
app.use("/api/industries", industries);
app.use("/api/companies", companies);


//Create an object that uses a watson username and password and 
//create a new watson Authorization. This is to grab the token from watson.

// var sttAuthService = new watson.AuthorizationV1(
//   Object.assign(
//     {
//       username: watsonUsername,
//       password: watsonPassword
//     },
//     vcapServices.getCredentials("speech_to_text") // pulls credentials from environment in bluemix, otherwise returns {}
//   )
// );

//Create a route that allows the front-end to grab the Watson Token needed for the Speech to text.
//If successful, send token, if not, send the 500 error.
app.use('/api/speech-to-text/token', function (req, res) {
  // sttAuthService.getToken(
  //   {
  //     url: watson.SpeechToTextV1.URL
  //   },
  //   function (err, token) {
  //     if (err) {
  //       res.status(500).send('Error retrieving token');
  //       return;
  //     }
  //     res.send(token);
  //   }
  // );
  res.send(azure);
});

app.listen(port, () => console.log(`Server is running on port ${port}`));