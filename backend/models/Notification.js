const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: '24h' }, 
});

const notification = mongoose.model('notification', notificationSchema);

module.exports = notification;