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
  isDeleted: {
    type: Boolean,
    default: false
  },
  managerId: {
    type: String,
    required:true,
    index: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = User = mongoose.model('users', UserSchema);