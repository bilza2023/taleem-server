// index.js
const express = require('express');
const mongoose = require('mongoose');
const User = require('./schemas/User');
const TCode = require('./schemas/TCode');
const app = express();
const RestfulExpressRouter = require('restful_express_router'); 

const cors = require('cors');
const corsOptions = {
  origin: ['https://taleem-help-backoffice.vercel.app/', 'http://localhost:5173' , 'https://taleem.help'],
  methods: 'POST', // Specify the allowed HTTP methods, e.g., 'GET', 'POST', 'PUT', etc.
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
};
app.use(cors('*', corsOptions)); //working
// Add JSON parsing middleware
app.use(express.json());

// Environment variables with fallback values
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.LOCAL_MONGO_URI || 'mongodb://admin:password@local_mongo:27017/localDb?authSource=admin';


// const User = mongoose.model('User', userSchema);
const userRouter = new RestfulExpressRouter(User);
app.use('/user', userRouter.getRouter());

const tcodeRouter = new RestfulExpressRouter(TCode);
app.use('/tcode', tcodeRouter.getRouter());

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

// Home route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Node.js API with MongoDB!' });
});

// Route 1: Check DB Connection and Return Count
app.get('/checkDb', async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({ 
      status: 'Connected',
      message: 'Successfully connected to database',
      userCount: count
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'Error',
      message: error.message 
    });
  }
});

// Route 2: Write to DB
app.get('/writeDb', async (req, res) => {
  try {
    const newUser = new User({
      name: 'John Doe',
      email: 'john@example.com',
      age: 30
    });

    const savedUser = await newUser.save();
    res.json({ 
      status: 'Success',
      message: 'User created successfully',
      user: savedUser 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'Error',
      message: error.message 
    });
  }
});

// Route 3: Read from DB
app.get('/readDb', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json({
      status: 'Success',
      count: users.length,
      users: users
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'Error',
      message: error.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});