const express = require('express');
const router = express.Router(); 
router.use(express.json());
const profileModel = require('../models/Profile');


router.get('/profile-details',async (req,res)=>{ 
    try{
  
    const profiles = await profileModel.find();
    const profile = profiles.find(profile => profile.userId.toString() == "67d3f0e118f33f46695adf4b");
    // console.log(profiles);
    res.status(200).send(profile);
    } catch (error){
      res.send({message:'details not found'});
    }
  });


  // router.get('/staff-students',verify,async(req,res)=>{
  //   try{
  //       const staff_id=req.user.id;

  module.exports = router;