const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  industry: {
    type: Schema.Types.ObjectId,
    ref: 'industries',
    required: true
  },
  ceo: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = Company = mongoose.model('company', CompanySchema);