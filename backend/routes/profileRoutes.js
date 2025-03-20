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
// save 

router.post('/profile-update', async (req, res) => {
      try {
        // const { userId, profileData } = req.body;
        const profiles = await profileModel.find();
        const profile = profiles.find(profile => profile.userId.toString() == "67d3f0e118f33f46695adf4b");
        if (!profile) {
          profile = new profileModel({ userId, ...profileData });
          await profile.save();

          return res.status(201).send({ message: 'Profile created', profile });
        } else {
          profile.set(profileData);
          await profile.save();
          return res.status(200).send({ message: 'Profile updated', profile });
        }
      } catch (error) {
        res.status(500).send({ message: 'Error updating or creating profile' });
      }
});

module.exports = router;