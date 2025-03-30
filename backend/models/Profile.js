const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      },
  profilePic: { type: String, trim: true }, 

      firstName: String,
      lastName:String,
      designation:String,
      email: String,
      phoneNumber: Number,
      city:String,
      address: String,
      careerObjective:String,
      
    skills: [{
      skill: String,
      proficiency: {
        type: String,
        enum: ["Beginner", "Intermediate", "Expert"],
      },
    }],
    experience: [{
      jobTitle: String,
      company: String,
      
      startDate: Date,
      endDate: Date,
      
      description: String,
    }],
    education: [{
      fieldOfStudy: String,
      institution: String,
      startYear: Date,
      endYear: Date,
      percentage:Number,
    }],
    achievements: [{
      achievementTitle: String,
      description: String,
      year: Number,
    }],
    project: [{
      projectTitle: String,
      description: String,
      projectLink: String,
    }],
    training: [{
      trainingTitle: String,
      institute:String,
      completion:Date,
      description: String,
      
    }],
    
  });
  
  const Profile = mongoose.model('profile', profileSchema);
  
  module.exports = Profile;