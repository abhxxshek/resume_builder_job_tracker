const express = require('express');
const mongoose = require('mongoose');
const router = express.Router(); 
router.use(express.json());
const profileModel = require('../models/Profile');
const jwt= require('jsonwebtoken');

function getUser(re) {
  const decoded = jwt.verify(re.headers.token,process.env.jwt_secret_key);
  if(!decoded) throw 'Unauthorized access';
  return decoded
}

router.get('/profile-details',async (req,res)=>{ 
    try{
    const userDetails = getUser(req);
    const profiles = await profileModel.find();
    const profile = profiles.find(profile => profile.userId.toString() == userDetails.id);
      // console.log(profiles);
    res.status(200).send(profile);
    } catch (error){
      res.send({message:'details not found'});
    }
});
// save 

router.post('/save-resume', async (req, res) => {
    // console.log(req.body);
  const userDetails = getUser(req);
      try {
        const profiles = await profileModel.find();
        const profile = profiles.find(profile => profile.userId.toString() == userDetails.id);
        if (!profile) {
          console.log('no prof');
            const { userId, firstName, lastName, designation, careerObjective, email, phoneNumber, city, address, experience, skills, education,achievements, training, project } = req.body;
            //userId to ObjectId
            const objectId = new mongoose.Types.ObjectId(userId);
              const profileData = new profileModel({
                userId: objectId,
                firstName,
                lastName,
                designation,
                careerObjective,
                email,
                phoneNumber,
                city,
                address,
                experience,
                skills,
                education,
                achievements,
                training,
                project
              });
              await profileData.save();
              return res.status(201).send({success:true, message: 'Profile created', profileData });
        } else {
          // console.log('hiii prof');
          profile.set(req.body);
          await profile.save();
          return res.status(200).send({success:true, message: 'Profile updated', profile });
        }
      } catch (error) {
        res.status(500).send({success:false, message: 'Error updating profile' });
      }
});

module.exports = router;