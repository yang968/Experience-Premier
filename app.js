const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));