const express = require('express');
const mongoose = require('mongoose');
const router = express.Router(); 
router.use(express.json());
const payDetailsModel = require('../models/Payment');
const User = require('../models/User');
const templateModel = require('../models/Template');
const notificationModel = require('../models/Notification');
const userStatsModel = require('../models/userStats');
const jwt= require('jsonwebtoken');
const axios = require("axios");

function getUser(re) {
  const decoded = jwt.verify(re.headers.token,process.env.jwt_secret_key);
  if(!decoded) throw 'Unauthorized access';
  return decoded
}



module.exports = (io) => {

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

router.get('/userstats', async (req, res) => {
  try {
    const totalUser = await User.countDocuments();
    const userStats = await userStatsModel.find(); 
    const counts = await userStatsModel.aggregate([{
          $group: {
            _id: null,
            totalResumeDownloads: { $sum: "$resumeDownloads" },
            totalJobSearches: { $sum: "$jobSearches" },
            totalApplications: { $sum: "$application" }
          } }]);
    const { totalResumeDownloads, totalJobSearches, totalApplications } = counts[0];
      res.status(200).json({userStats,totalResumeDownloads,totalJobSearches, totalApplications,totalUser});
  } catch (error) {
      console.error('Error fetching stats:', error);
      res.status(500).json({ message: 'Error fetching stats' });
  }
});
  //add a new template
  router.get('/add-template', async (req, res) => {
          try {
              
              io.emit('message', 'New template added');
              res.status(201).json({ message: 'Template added successfully!' });
          } catch (error) {
              console.error('Error adding template:', error);
              res.status(500).json({ message: 'Error adding template' });
          }
    });

  // Add a new notification 
  router.post('/add-notification', async (req, res) => {
      const { message } = req.body;
      try {
          const newNotification = new notificationModel({ message });
          await newNotification.save();
          io.emit('notification', newNotification);
          res.status(201).json(newNotification);
      } catch (error) {
          console.error('Error adding notification:', error);
          res.status(500).json({ message: 'Error adding notification' });
      }
  });
  
  return router; 
};