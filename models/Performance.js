const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PerformanceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  month: {
    type: Integer,
    required: true
  },
  sentiment: {
    type: Float,
    default: 0.0
  },
  negative: {
    type: Integer,
    default: 0
  },
  positive: {
    type: Integer,
    default: 0
  },
  sadness: {
    type: Float,
    default: 0.0
  },
  joy: {
    type: Float,
    default: 0.0
  },
  anger: {
    type: Float,
    default: 0.0
  },
  fear: {
    type: Float,
    default: 0.0
  },
  disgust: {
    type: Float,
    default: 0.0
  },
  keywords: {
    type: Object,
    default: {}
  }
});

module.exports = Performance = mongoose.model("performances", PerformanceSchema);
