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
  company: {
    type: Schema.Types.ObjectId,
    ref: 'companies',
    required: true,
  },
  manager: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: false,
    index: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
});

module.exports = User = mongoose.model('users', UserSchema);