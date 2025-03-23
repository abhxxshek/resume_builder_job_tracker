const express = require('express');
const mongoose = require('mongoose');
const router = express.Router(); 
router.use(express.json());
const payDetailsModel = require('../models/paymentTransaction');
const User = require('../models/User');
const jwt= require('jsonwebtoken');

function getUser(re) {
  const decoded = jwt.verify(re.headers.token,process.env.jwt_secret_key);
  if(!decoded) throw 'Unauthorized access';
  return decoded
}

router.get('/payment-details',async (req,res)=>{ 
    try{
    const payments = await payDetailsModel.find();
    res.status(200).send(payments);
    } catch (error){
      res.send({message:'details not found'});
    }
});

router.get('/totalUser-details',async (req,res)=>{ 
    try{
    const totalUser = await User.countDocuments();
    res.status(200).json({ totalUser });
    } catch (error){
      res.send({message:'details not found'});
    }
});

module.exports = router;