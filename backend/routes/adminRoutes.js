const express = require('express');
const router = express.Router(); 
router.use(express.json());
const payDetailsModel = require('../models/Payment');
const User = require('../models/User');
const notificationModel = require('../models/Notification');
const userStatsModel = require('../models/userStats');
const styleModel = require('../models/Style');
const jwt= require('jsonwebtoken');

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
  
   // save template Style resume
 router.post('/save-Style', async (req, res) => {
  try {
     const { headingColor, fontSize, color, fontFamily } = req.body;
     const newStyle = await styleModel.findOneAndUpdate({templateName: 'Template13.jsx'},{
       careerObjective: '',
       headingColor:headingColor, 
       fontSize:fontSize, 
       color:color, 
       fontFamily:fontFamily 
     });
     
     // console.log('New style saved successfully!',newStyle);
     const message = 'Template13.jsx was Updated!';
     const newNotification = new notificationModel({ message });
     await newNotification.save();
     io.emit('notification', newNotification);
     res.status(201).json(newNotification);
     }
   catch (error) {
     console.error('Error adding notification:', error);
     res.status(500).json({ message: 'Error adding notification' });
  }
}); 

  return router; 
};