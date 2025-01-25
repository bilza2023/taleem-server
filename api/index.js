
const express = require('express');
const mongoose = require('mongoose');
const User = require('./schemas/User');
const TCode = require('./schemas/TCode');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const RestfulExpressRouter = require('restful_express_router'); 
///////////////////////////////////////////////////////////////
const passport = require('passport');
require('./config/passport')(passport);
app.use(passport.initialize());
///////////////////////////////////////////////////////////////

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
// const MONGO_URI = process.env.LOCAL_MONGO_URI || 'mongodb://admin:password@local_mongo:27017/localDb?authSource=admin';
const MONGO_URI = "mongodb://localhost:27017/localDb";

const userRouter = new RestfulExpressRouter(User);
app.use('/user', userRouter.getRouter());

// const tcodeRouter = new RestfulExpressRouter(TCode);
// app.use('/tcode', tcodeRouter.getRouter());

/////passport.js for tcode/////
const tcodeRouter = new RestfulExpressRouter(TCode);

// Add Passport.js authentication middleware to save and create routes
tcodeRouter.middlewareForCreate.push(passport.authenticate('jwt', { session: false }));
tcodeRouter.middlewareForUpdate.push(passport.authenticate('jwt', { session: false }));

// Use the router
app.use('/tcode', tcodeRouter.getRouter());
//////////////////////////////////////////////////////////////////////////////


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

app.get('/secure', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'This is a secure route', user: req.user });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
/////////////////////////////////////////////////////

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    debugger;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword
    });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
});

app.get('/checkDb', async (req, res) => {
  try {
    const userCount = await User.countDocuments(); // Example query
    res.json({ message: 'Database connected!', userCount });
  } catch (err) {
    res.status(500).json({ message: 'Database query failed', error: err.message });
  }
});

/////////////////////////////////////

// Add login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare provided password with stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const payload = { id: user._id, email: user.email, role: user.role };
    const token = jwt.sign(payload, 'eea2c1ce3117d5bbba96b9e6791d97d98ca5efd90d242e96927e7ecf79fe97ddf05f071f2ef2352715008adaa4cb2163a647fd0e9cf2343728052be0ceecbfd3', { expiresIn: '15d' });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
});
