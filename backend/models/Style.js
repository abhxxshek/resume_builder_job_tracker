const mongoose = require('mongoose');

const styleSchema = new mongoose.Schema({
  templateName: {
    type: String,
    required: true,
  },
  fontSize: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  fontFamily: {
    type: String,
    required: true,
  },
  headingColor: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const style = mongoose.model('style', styleSchema);

module.exports = style;