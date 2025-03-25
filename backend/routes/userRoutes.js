const express = require('express');
const router = express.Router(); 
router.use(express.json());
const axios = require("axios");
const notificationModel = require('../models/Notification');

// use skills for searching
router.get("/jobs", async (req, res) => {
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
    
    fetchData();
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

router.post('/user/applyjob', async (req, res) => {
  const { jobId } = req.body;
  // if (!jobId) {
  //   return res.status(400).json({ message: 'Job ID is required' });
  // }

   try {
  //   const job = await Job.findById(jobId);
  //   if (!job) {
  //     return res.status(404).json({ message: 'Job not found' });
  //   }

  //   job.applied += 1; // Increment the applied count
    // await job.save(); // Save the updated job document

    return res.status(200).json({ message: 'Application successful' });
  } catch (error) {
    console.error('Error applying for job:', error);
    return res.status(500).json({ message: 'Internal server error' });
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