const express = require('express');
const app = express(); 
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
require('dotenv').config();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(morgan('dev'));

// Import routes
const authRoutes = require('./routes/authRoutes');

// Mount routes
app.use('/api/auth', authRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is active on Port ${PORT}`);
});