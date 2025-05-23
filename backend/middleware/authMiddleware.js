const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Protect routes
exports.protect = async (req, res, next) => {
//   let token;

//   // Check if token exists in headers
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     try {
//       // Get token from header
//       token = req.headers.authorization.split(' ')[1];

//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_key_123456789');

//       // Get user from the token
//       req.user = await User.findById(decoded.id).select('-password');

//       next();
//     } catch (error) {
//       console.error(error);
//       res.status(401).json({ message: 'Not authorized, token failed' });
//     }
//   }

//   if (!token) {
//     res.status(401).json({ message: 'Not authorized, no token' });
//   }
// };

// // Admin middleware
// exports.admin = (req, res, next) => {
//   if (req.user && req.user.role === 'admin') {
//     next();
//   } else {
//     res.status(401).json({ message: 'Not authorized as an admin' });
//   }
let token=req.headers.token;
    try{
        if(!token) throw 'Unauthorized access !'
        else{
            let payload=jwt.verify(token,process.env.jwt_secret_key);
            if(!payload) throw 'Unauthorized access !';
            req.user=payload; //attaching user data to the request
            next();
        }
    }catch(error){
        console.log(error)
    }
};