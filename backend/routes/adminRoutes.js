const express = require('express');
const mongoose = require('mongoose');
const router = express.Router(); 
router.use(express.json());
const payDetailsModel = require('../models/paymentTransaction');
const User = require('../models/User');
const templateModel = require('../models/Template');
const notificationModel = require('../models/Notification');
const jwt= require('jsonwebtoken');
const axios = require("axios");

function getUser(re) {
  const decoded = jwt.verify(re.headers.token,process.env.jwt_secret_key);
  if(!decoded) throw 'Unauthorized access';
  return decoded
}

// router.get('/add',async (req,res)=>{ 

// try{
//   // const temp = await templateModel.find();
//   // res.status(200).json(temp);
//     // console.log(temp);
//     const options = {
//       method: 'GET',
//       url: "https://res.cloudinary.com/dqpldrhqs/raw/upload/v1742831226/Template9_e4tm4j.jsx"
      
//   };
//      const response = await axios.request(options);
//                 console.log(response.data);
//                 res.status(200).json(response.data);
//   } catch (error) {
//     console.error('Error :', error);
//   }

// })

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

  //add a new template
  router.get('/add-template', async (req, res) => {
          try {
              // Emit an event to notify all connected clients
              // const { name, price, isFree, cloudinaryUrl } = req.body; 
        // const newTemplate = new Template({ name, price, isFree, cloudinaryUrl });
        // await newTemplate.save(); 
        // Emit an event to notify all connected clients
        // io.emit('newTemplate', 'Enthsda ok  by ');
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