const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  transcript: {
    type: String,
    required: true,
    default: ""
  },
  date: {
    type: Date,
    default: Date.now
  },
  results: {
    type: String,
    required: true
  }
});

module.exports = Task = mongoose.model('tasks', TaskSchema);