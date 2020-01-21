const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SESchema = new Schema({
  ifType: {
    type: String,
  },
  ifLink: {
    type: String,
  },
  width: {
    type: String,
  },
  pTop: {
    type: String,
  },
  pBottom: {
    type: String,
  },
  pLeft: {
    type: String,
  },
  pRight: {
    type: String,
  }
});

module.exports = SE = mongoose.model('SE', SESchema);