const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  task: {
    type: Schema.Types.ObjectId,
    ref: "tasks"
  },
  results: {
    type: String
  }
});

module.exports = Data = mongoose.model("data", EventSchema);