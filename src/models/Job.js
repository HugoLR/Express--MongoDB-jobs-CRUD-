const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  description: {
    type: String,
    required: true
  },
  hiringDate: {
    type: Date,
    required: true
  },
  salary: mongoose.Decimal128,
  location: {
    type: String,
    required: true
  },
  contactEmail: {
    type: String,
    required: true
  },
  isStillAvailable: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Job', Schema)
