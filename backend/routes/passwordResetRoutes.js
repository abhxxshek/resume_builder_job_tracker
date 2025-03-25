const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const otpModel=require('../models/otpData');
const User=require('../models/User');
const bcrypt=require('bcryptjs');

//otp generation
function otpGeneration(){
    let otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
}

//nodemailer setup
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.email,
        pass:process.env.pass,
    }
});

//send otp to user
router.post('/send-otp', async (req, res) => {
  try {
    console.log("Request body:", req.body); // Log the request body for debugging
    const { email } = req.body;
    if (!email) {
      return res.status(400).send({ message: "Email is required." });
    }

    const user = await User.findOne({email:email});
    if(!user){
      return res.status(400).send({success:false,message:"Email not found.Please enter a registered email."});
    } 

    const otp = otpGeneration();
    const data = new otpModel({ email, otp });
    await data.save();

    const mailOptions = {
      from: 'ambient963@gmail.com',
      to: email,
      subject: 'Your OTP',
      text: `Your OTP is ${otp}. OTP is valid for only 1 minutes.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(400).send({success:false, message: "Failed to send the OTP" });
      }
      res.status(200).send({success:true, message: "OTP sent successfully" });
    });
  } catch (error) {
    console.error("Error in sending OTP:", error);
    res.status(500).send({success:false, message: "Server error. Please try again." });
  }
});

//to verify otp
router.post('/verify-otp',async(req,res)=>{
    try{
        const {email,otp}=req.body;
        const data=await otpModel.findOne({email:email});
        console.log(data)
        if (!data) {
            return res.status(400).send({success:false, message: "No OTP found for this email. Please request a new OTP." });
        }
        console.log(data)
        if(data.otp==otp){
            await otpModel.deleteOne({email:data.email});
            return res.status(200).send({success:true, message: "OTP verified successfully" });
        }else{
            res.status(400).send({success:false,message:"Invalid OTP"});
        }
    }catch(error){
        console.error("Error in OTP verification:", error);
        res.status(500).send({success:false, message: "Error in OTP verification. Please try again." });
    }
   
});

router.post('/reset-password',async(req,res)=>{
  try{
    const {email,newPassword}=req.body;
    const  bcryptedPassword=await bcrypt.hash(newPassword,10);
    const user=await User.findOneAndUpdate({email:email},{password:bcryptedPassword});
    res.status(200).send({success:true,message:"Password reset successful"})
  }catch(error){
    console.error("Error in password reset :",error);
    res.status(500).send({success:false,message:"Error in password reset.Please try again ."});
  }
})

module.exports=router;