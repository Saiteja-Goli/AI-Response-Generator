// index.js

const express = require('express');
const session = require('express-session');
const passport = require('passport');
const authRoutes = require('./routes/Google_Oauth');
const emailRoutes = require('./routes/Gmail_fetch');
const outlookAuthRoutes = require('./routes/Outlook_Oauth')
const outlookEmailRoutes = require('./routes/Outlook_Oauth')
require('dotenv').config();
require('./config/passport-config');

const app = express();
const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.json({ "Message": "Welcome to server" })
});

// Initialize Express session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use routes
app.use('/auth', authRoutes);
app.use('/', emailRoutes);

// app.use('/auth', outlookAuthRoutes)
// app.use('/', outlookEmailRoutes);



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
