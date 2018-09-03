const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PerformanceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  month: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  tasks: {
    type: Number,
    default: 1
  },
  sentimentScore: {
    type: Number,
    default: 0.0
  },
  negative: {
    type: Number,
    default: 0
  },
  neutral: {
    type: Number,
    default: 0
  },
  positive: {
    type: Number,
    default: 0
  },
  sadness: {
    type: Number,
    default: 0.0
  },
  joy: {
    type: Number,
    default: 0.0
  },
  anger: {
    type: Number,
    default: 0.0
  },
  fear: {
    type: Number,
    default: 0.0
  },
  disgust: {
    type: Number,
    default: 0.0
  },
  keywords: {
    type: String
  }
});

module.exports = Performance = mongoose.model("performances", PerformanceSchema);
