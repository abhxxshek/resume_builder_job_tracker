const mongoose = require('mongoose');

const resumePurchaseSchema = new mongoose.Schema({
  

  buyerName: {
    type: String, 
    // required: true
  },
  email: {
    type: String, 
    // required: true,

  },
  amount: {
    type: Number, 
    // required: true
  },
  paymentId:{
    type: String,
    // required: true
  },
  method: {
    type: String, 
    // required: true
  },
  template:{
    type: String,

  },
  date: {
    type: Date, 
    required: true,
    default: Date.now
  }
});

const Payment = mongoose.model('payment', resumePurchaseSchema);

module.exports = Payment;  
