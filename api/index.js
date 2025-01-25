
const express = require('express');
const mongoose = require('mongoose');
const User = require('./schemas/User');
const TCode = require('./schemas/TCode');
const app = express();
const RestfulExpressRouter = require('restful_express_router'); 

const cors = require('cors');
const corsOptions = {
  origin: ['http://localhost:5173', 'https://taleem.help', 'https://taleem.help/api'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'],  // Allow all necessary methods
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  maxAge: 600 // Specify how long the results of a preflight request can be cached
};
app.use(cors('*', corsOptions)); //working
// Add JSON parsing middleware
app.use(express.json());

// Environment variables with fallback values
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.LOCAL_MONGO_URI || 'mongodb://admin:password@local_mongo:27017/localDb?authSource=admin';

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

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});