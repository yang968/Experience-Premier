const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IndustrySchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = Industry = mongoose.model('industries', IndustrySchema);