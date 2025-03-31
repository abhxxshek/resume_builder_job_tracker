const express = require('express');
const router = express.Router(); 
router.use(express.json());
const axios = require("axios");
const notificationModel = require('../models/Notification');
const userStatsModel = require('../models/userStats');
const profileModel = require('../models/Profile');
const UserResumes = require('../models/Resume');
const payDetailsModel = require('../models/Payment');
const styleModel = require('../models/Style');
const jwt= require('jsonwebtoken');

function getUser(re) {
  const decoded = jwt.verify(re.headers.token,process.env.jwt_secret_key);
  if(!decoded) throw 'Unauthorized access';
  return decoded
}

// use skills for searching
router.get("/jobs", async (req, res) => {
  try {
  const user = getUser (req);
  const profile = await profileModel.findOne({ userId: user.id });
  if (!profile) {
      console.log('Profile not found');
  } else {
    const userSkills =  profile.skills.map(item => item.skill);
    const keywords = userSkills.join(' ');
    console.log('Profile found:',keywords);
    const options = {
      method: 'GET',
      url: 'https://linkedin-data-api.p.rapidapi.com/search-jobs-v2',
      params: {
        keywords: keywords, 
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
const userStats = await userStatsModel.findOneAndUpdate({ userId: user.id },
            { $inc: {jobSearches: 1 }, userMail: user.email,userName:user.name }, 
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );
  fetchData();
  }
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).send("Error fetching data from API");
  }
});
// selected job details
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
// increment downloads
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

// get individulal downloads
router.get('/my-stats', async (req, res) => {
  const user = getUser (req);
  try {
      const userStats = await userStatsModel.findOne({ userId: user.id })
    //  console.log(userStats);
    return res.status(200).json(userStats);
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

//save pdf
router.post("/resume-generated", async (req, res) => {
  const user = getUser (req);
  // console.log("udataurl",req.body.secure_url)
  try {
    const secureUrl = req.body.secure_url;
    const updatedUser  = await UserResumes.findOneAndUpdate({ userId: user.id }, { 
            $addToSet: { resumes: secureUrl }, // Add the new URL to the resumes array (avoids duplicates)
            userMail: user.email },
        { 
            new: true, 
            upsert: true,
            useFindAndModify: false 
        }
    );
    res.status(200).json({ message: "resume saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save resume" });
  }
});

// save resume
router.get("/saved-resumes", async (req, res) => {
  const user = getUser (req);
  try {
    const data  = await UserResumes.find({ userId: user.id })
    // console.log(data);
    
    res.status(200).json({ message: "resume saved successfully", resumes:data[0].resumes });
  } catch (error) {
    res.status(500).json({ error: "Failed to save resume" });
  }
});

// delete resume
router.delete("/delete-resume/:resume", async (req, res) => {
  const user = getUser(req);
  const resumeToDelete = req.params.resume;
  try {
      const userResumes = await UserResumes.findOne({ userId: user.id });
      if (!userResumes) {
          return res.status(404).json({ error: "User  not found" });
      }
      userResumes.resumes = userResumes.resumes.filter(resume => resume !== resumeToDelete);
      await userResumes.save();
      res.status(200).json({ message: "Resume deleted successfully"})
  } catch (error) {
      res.status(500).json({ error: "Failed to delete resume" });
  }
});

//fetch the individual payment details
router.get('/payment-details',async(req,res)=>{
  try{
    const user=getUser(req);
    const payments = await payDetailsModel.find({email:user.email});
    if(!payments){
      return res.status(404).json({message:'No payment details found'});
    }
    res.status(200).json(payments);
  } catch (error){
    console.error('Error fetching payment details:', error);
    res.status(500).json({ message: 'Error fetching payment details' });
  }
})
// style update 
router.get('/savedStyle', async (req, res) => {
  try {
     const newStyle = await styleModel.findOne({templateName: 'Template13.jsx'});
      // console.log(newStyle);   
     res.status(200).json(newStyle);
  }catch (error) {
     console.error('Error adding notification:', error);
     res.status(500).json({ message: 'Error finding styles' });
  }
}); 

module.exports = router;