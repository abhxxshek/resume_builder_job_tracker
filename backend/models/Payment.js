const mongoose = require('mongoose');

const resumePurchaseSchema = new mongoose.Schema({
  
  // resumeName: {
  //   type: String, 
  //    required: true
  // },
  buyerName: {
    type: String, 
    // required: true
  },
  email: {
    type: String, 
    // required: true,

  },
  amount: {
    type: mongoose.Types.Decimal128, 
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
  date: {
    type: Date, 
    required: true,
    default: Date.now
  }
});

const Payment = mongoose.model('payment', resumePurchaseSchema);

module.exports = Payment;  
