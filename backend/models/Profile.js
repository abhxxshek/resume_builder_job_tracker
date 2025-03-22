const mongoose = require('mongoose');
const profileSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      },
      firstName: String,
      lastName:String,
      designation:String,
      email: String,
      phoneNumber: Number,
      city:String,
      address: String,
      careerObjective:String,
      // linkedIn: String,
      // github: String,
    skills: [{
      skill: String,
      proficiency: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced"],
      },
    }],
    experience: [{
      jobTitle: String,
      company: String,
      // location: String,
      startDate: Date,
      endDate: Date,
      // currentJob: Boolean,
      description: String,
    }],
    education: [{
      fieldOfStudy: String,
      institution: String,
      startYear: Number,
      endYear: Number,
      percentage:Number,
    }],
    achievements: [{
      achievementTitle: String,
      description: String,
      year: Date,
    }],
    project: [{
      projectTitle: String,
      description: String,
      projectLink: String,
    }],
    training: [{
      trainingTitle: String,
      institute:String,
      completion:String,
      description: String,
      
    }],
  });
  
  const Profile = mongoose.model('profile', profileSchema);
  
  module.exports = Profile;