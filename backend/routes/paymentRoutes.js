const Razorpay = require("razorpay");
const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const Payment = require("../models/Payment");
const jwt = require("jsonwebtoken");

function getUser(re) {
  const decoded = jwt.verify(re.headers.token, process.env.jwt_secret_key);
  if (!decoded) throw "Unauthorized access";
  return decoded;
}

//ORDER ID GENERATION
router.post("/orders", async (req, res) => {
  const razorpay = new Razorpay({
    key_id: "rzp_test_GYgXLevf7Fb2hM",
    key_secret: "0l1KIkMmOtOltwecjWW5T1kP",
  });

  const options = {
    amount: req.body.amount,
    currency: req.body.currency,
    // reciept:"receipt#1",
    payment_capture: 1,
  };

  try {
    const response = await razorpay.orders.create(options);
    res.send({
      order_id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res
      .status(500)
      .send({ success: false, message: "Internal server error !" });
  }
});

//get payment ID
router.get("/paymentId/:id", async (req, res) => {
  const paymentId = req.params.id;
  const razorpay = new Razorpay({
    key_id: "rzp_test_GYgXLevf7Fb2hM",
    key_secret:"0l1KIkMmOtOltwecjWW5T1kP",
  });

  try {
    const payment = await razorpay.payments.fetch(paymentId);
    if (!payment) {
      return res.send({ message: "Error at razorpay loading !" });
    }
    res.send({
      status: payment.status,
      method: payment.method,
      amount: (payment.amount)/100,
    //   currency: payment.currency,
    });
  } catch (error) {
    res.send({ message: "failed to fetch payment details !",error });
  }
});

//save the payment details into database
router.post("/save-payment-details", async (req, res) => {
    console.log(req.body
);
  const decode = getUser(req);
  const email = decode.email;
  const name = decode.name;
  const paymentId = req.body.transactionId;
  const amount = req.body.paymentData.amount;
  const method = req.body.paymentData.method;
  const template = req.body.templateName;

  try {
    const payment = new Payment({
      paymentId: paymentId,
      email: email,
      buyerName: name,
      template: template,
      amount:amount,
      method: method,
    });
    console.log(req.body.paymentData.amount);
    payment.save();
    res.send({success:true, message: "Payment details saved successfully " });
  } catch (error) {
    res.send({success:false, message: "Failed to save payment details !" });
    console.log(error);
  } 
}); 

module.exports = router;
