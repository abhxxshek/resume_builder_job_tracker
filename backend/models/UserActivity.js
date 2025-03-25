const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    jobSearches: { type: Number, default: 0 },
    jobApplications: { type: Number, default: 0 },
    downloads: { type: Number, default: 0 }
});

const counter = mongoose.model('counter', counterSchema);

module.exports = counter;
