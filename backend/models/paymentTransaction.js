const mongoose = require('mongoose');

const resumePurchaseSchema = new mongoose.Schema({
  id: {
    type: Number, 
    required: true,
    unique: true
  },
  resumeName: {
    type: String, 
    required: true
  },
  buyerName: {
    type: String, 
    required: true
  },
  email: {
    type: String, 
    required: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
  },
  amount: {
    type: String, 
    required: true
  },
  date: {
    type: Date, 
    required: true,
    default: Date.now
  }
});

const resumePurchase = mongoose.model('payment', resumePurchaseSchema);

module.exports = resumePurchase;  
