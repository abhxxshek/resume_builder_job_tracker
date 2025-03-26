const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({message:"User created successfully"});
        // _id: user._id,
        // name: user.name,
        // email: user.email,
        // role: user.role,
        // isPremiumUser: user.isPremiumUser,
        // token: generateToken(user._id),
      // });

    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Login user & get token
// @route   POST /api/auth/login  
// @access  Public
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists and password matches
    if (user && (await user.matchPassword(password))) {
      // res.json({
      //   _id: user._id,
      //   name: user.name,
      //   email: user.email,
      //   role: user.role,
      //   isPremiumUser: user.isPremiumUser,
      //   token: generateToken(user._id),
      // });
      const payload={email:user.email,name:user.name,password:user.password,role:user.role,id:user._id}  
          const token=jwt.sign(payload,process.env.jwt_secret_key,{expiresIn:"3h"});
          res.status(200).send({success:true,message:"Login successful",token:token})
    } else {
      res.status(401).json({success:false, message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({success:false, message: 'Server error', error: error.message });
  }
};

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
