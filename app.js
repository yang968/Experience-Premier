const mongoose = require("mongoose");
const express = require('express');
const app = express();
const db = require("./config/keys").mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/api/users");
const tasks = require('./routes/api/tasks');
const industries = require('./routes/api/industries');
const companies = require('./routes/api/companies');
const cors = require('cors');
const watson = require('watson-developer-cloud');
const vcapServices = require('vcap_services');
const watsonUsername = require("./config/keys").username
const watsonPassword = require("./config/keys").password

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello World"));

app.use(passport.initialize());
require("./config/passport")(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/tasks", tasks);
app.use("/api/industries", industries);
app.use("/api/companies", companies);

//We need this for the no access control origin header. Imported in line 11
app.use(cors());




//Create an object that uses a watson username and password and 
//create a new watson Authorization. This is to grab the token from watson.

var sttAuthService = new watson.AuthorizationV1(
  Object.assign(
    {
      username: watsonUsername,
      password: watsonPassword
    },
    vcapServices.getCredentials("speech_to_text") // pulls credentials from environment in bluemix, otherwise returns {}
  )
);

//Create a route that allows the front-end to grab the Watson Token needed for the Speech to text.
//If successful, send token, if not, send the 500 error.
app.use('/api/speech-to-text/token', function (req, res) {
  sttAuthService.getToken(
    {
      url: watson.SpeechToTextV1.URL
    },
    function (err, token) {
      if (err) {
        res.status(500).send('Error retrieving token');
        return;
      }
      res.send(token);
    }
  );
});

app.listen(port, () => console.log(`Server is running on port ${port}`));