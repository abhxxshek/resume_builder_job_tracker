const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();

const cors = require('cors');
const connectDB = require('./config/db');


const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST']
    },
});



// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(morgan('dev'));

// Import routes
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const passwordResetRoutes = require('./routes/passwordResetRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const templateRoutes = require('./routes/templateRoutes');

// Mount routes
app.use('/api/auth', authRoutes);
app.use("/profile", profileRoutes);
app.use("/user", userRoutes);
app.use("/admin", adminRoutes(io)); 
app.use('/forgot-password', passwordResetRoutes);
app.use('/payment', paymentRoutes);
app.use('/template', templateRoutes);

// Handle socket connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle incoming messages
    socket.on('message', (data) => {
        console.log('Received message from client:', data);
    });

    // Clean up when the socket disconnects
    socket.on('disconnect', () => {
        console.log('User  disconnected');
    });
});

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
server.listen(PORT, () => {
    console.log(`Server is active on Port ${PORT}`);
});