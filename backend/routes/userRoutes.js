const express = require('express');
const router = express.Router(); 
router.use(express.json());
const axios = require("axios");
const notificationModel = require('../models/Notification');
const userStatsModel = require('../models/userStats');
const jwt= require('jsonwebtoken');

function getUser(re) {
  const decoded = jwt.verify(re.headers.token,process.env.jwt_secret_key);
  if(!decoded) throw 'Unauthorized access';
  return decoded
}

// use skills for searching
router.get("/jobs/:id", async (req, res) => {
  try {
    const options = {
        method: 'GET',
        url: 'https://linkedin-data-api.p.rapidapi.com/search-jobs-v2',
        params: {
          keywords: 'React',
          locationId: '92000000',
          datePosted: 'pastWeek,past24Hours',
          sort: 'mostRelevant'
        },
        headers: {
            'x-rapidapi-key': process.env.RapidApiKey,
            'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com'
          }
      };
      async function fetchData() {
        try {
            const response = await axios.request(options);
            console.log(response.data.data);
            res.status(200).json(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }
    const user = getUser (req);
      try {
          const userStats = await userStatsModel.findOneAndUpdate({ userId: user.id },
              { $inc: {jobSearches: 1 }, userMail: user.email,userName:user.name }, 
              { new: true, upsert: true, setDefaultsOnInsert: true }
          );
        return res.status(userStats.isNew ? 201 : 200).json({message: userStats.isNew ? 'User  stats created' : 'User  stats updated',userStats});
      } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Server error', error });
      }
    
    // fetchData();
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).send("Error fetching data from API");
  }
});

router.get("/jobdetails/:id", async (req, res) => {
  try {
    const options = {
        method: 'GET',
        url: 'https://linkedin-data-api.p.rapidapi.com/get-job-details',
        params: {id:req.params.id},
        headers: {
            'x-rapidapi-key': process.env.RapidApiKey,
            'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com'
    }
    };
    async function fetchData() {
        try {
            const response = await axios.request(options);
            console.log(response.data.data);
            res.status(200).json(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
      
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).send("Error fetching data from API");
  }
});

router.get('/applyjob', async (req, res) => {
  const user = getUser (req);
  try {
      const userStats = await userStatsModel.findOneAndUpdate({ userId: user.id },
          { $inc: { application: 1 }, userMail: user.email,userName:user.name }, 
          { new: true, upsert: true, setDefaultsOnInsert: true }
      );
    // console.log(userStats);
    return res.status(userStats.isNew ? 201 : 200).json({message: userStats.isNew ? 'User  stats created' : 'User  stats updated',userStats});
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error', error });
  }
});

router.get('/downloads', async (req, res) => {
  const user = getUser (req);
  try {
      const userStats = await userStatsModel.findOneAndUpdate({ userId: user.id },
          { $inc: { resumeDownloads: 1 }, userMail: user.email,userName:user.name }, 
          { new: true, upsert: true, setDefaultsOnInsert: true }
      );
    // console.log(userStats);
    return res.status(userStats.isNew ? 201 : 200).json({message: userStats.isNew ? 'User  stats created' : 'User  stats updated',userStats});
  } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error', error });
  }
});

// get notifications
router.get('/notifications', async (req, res) => {
      try {
          const notifications = await notificationModel.find().sort({ createdAt: -1 }); 
          res.status(200).json(notifications);
      } catch (error) {
          console.error('Error fetching notifications:', error);
          res.status(500).json({ message: 'Error fetching notifications' });
      }
});


  
module.exports = router;