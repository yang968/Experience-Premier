const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  industry: {
    type: Schema.Types.ObjectId,
    ref: 'industries'
  },
  ceo: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Company = mongoose.model('company', CompanySchema);