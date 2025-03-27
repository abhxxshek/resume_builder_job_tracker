const mongoose = require('mongoose');

const userResumeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,  
  },
  userMail: {
    type: String,
    unique: true,  
  },
  resumes: {
    type: [String],
    default: [],  
  },
});

const userResumes = mongoose.model('resume', userResumeSchema);

module.exports = userResumes;
