const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  }, 
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: true
  },
  password: {
    type: String,
    required: true,
    min: 8
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'companies',
    required: true
  },
  manager: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: false,
    index: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = User = mongoose.model('users', UserSchema);