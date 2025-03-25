const mongoose = require('mongoose');

const userstatSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,  
  },
  userName: {
    type: String,
  },
  userMail: {
    type: String,
    unique: true,  
  },
  jobSearches: {
    type: Number,
    default: 0,  
  },
  application: {
    type: Number,
    default: 0,  
  },
  resumeDownloads: {
    type: Number,
    default: 0,  
  },
  templates: {
    type: [String],
    default: [],  
  },
});

const userstats = mongoose.model('userstat', userstatSchema);

module.exports = userstats;
