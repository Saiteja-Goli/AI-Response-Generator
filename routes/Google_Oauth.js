const express = require('express');
const passport = require('passport');
const { OAuth2Client } = require('google-auth-library');
const router = express.Router();
require("dotenv").config();

// Configure Google OAuth2 strategy
const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const redirectURI = process.env.GOOGLE_REDIRECT_URI;
const oauth2Client = new OAuth2Client(clientID, clientSecret, redirectURI);

// Initialize Passport middleware
router.use(passport.initialize());

// Route for initiating Google OAuth2 authentication
router.get('/google', passport.authenticate('google', { scope: ['https://mail.google.com/'] }));

// Route for handling Google OAuth2 callback
router.get('/google/callback', (req, res, next) => {
  const code = req.query.code; // Extracting the authorization code from the URL

  // Use the code to exchange for tokens
  oauth2Client.getToken(code, (err, tokens) => {
    if (err) {
      console.error('Error exchanging code for tokens:', err);
      return res.status(500).send('Error exchanging code for tokens');
    }

    req.session.tokens = tokens;

    res.redirect('/emails');
  });
});


module.exports = router;
