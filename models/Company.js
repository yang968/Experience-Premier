const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
    default: ""
  },
  industry: {
    type: Schema.Types.ObjectId,
    ref: 'industries',
    required: false
  },
  ceo: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: false
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = Company = mongoose.model('companies', CompanySchema);