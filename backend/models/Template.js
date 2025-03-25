const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, default: 0 }, 
  isFree: { type: Boolean, default: true }, 
  cloudinaryUrl: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now }, 
  updatedAt: { type: Date, default: Date.now }, 
});

const template = mongoose.model('template', templateSchema);

module.exports = template;