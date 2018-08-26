const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    default: ""
  }, 
  lastName: {
    type: String,
    required: true,
    default: ""
  },
  email: {
    type: String,
    required: true,
    index: true,
    default: ""
  },
  password: {
    type: String,
    required: true,
    min: 8,
    default: ""
  },
  managerId: {
    type: Schema.Types.ObjectId,
    index: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
});

module.exports = User = mongoose.model('users', UserSchema);