const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PDSchema = new Schema({
  bgColor: {
    type: String,
  },
  textColor: {
    type: String,
  },
  borderColor: {
    type: String,
  },
  borderSize: {
    type: String,
  },
  mTop: {
    type: String,
  },
  mBottom: {
    type: String,
  },
  mLeft: {
    type: String,
  },
  mRight: {
    type: String,
  }
});

module.exports = PD = mongoose.model('PD', PDSchema);