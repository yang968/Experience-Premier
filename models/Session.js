const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSessionSchema = new Schema({
  userId: {
    type: String
  },
  timeStamp: {
    type: Date,
    default: Date.now
  },
  token : {
    type: String,
    required: true
  }
});

module.exports = UserSession = mongoose.model('userSession', UserSessionSchema);
