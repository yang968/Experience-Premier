const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSessionSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  timeStamp: {
    type: Date,
    default: Date.now
  }

});

module.exports = UserSession = mongoose.model('userSession', UserSessionSchema);
