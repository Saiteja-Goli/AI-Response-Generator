// // routes/Outlook_Oauth.js
// const express = require('express');
// const passport = require('passport');
// const OAuth2Strategy = require('passport-oauth2').Strategy;
// const router = express.Router();
// require("dotenv").config()

// passport.use('oauth2', new OAuth2Strategy({
//     authorizationURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
//     tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
//     clientID: process.env.OUTLOOK_CLIENT_ID,
//     clientSecret: process.env.OUTLOOK_CLIENT_SECRET,
//     callbackURL: 'http://localhost:9000/auth/outlook/callback', // Update with your callback URL
//     scope: ['openid', 'profile', 'offline_access', 'Mail.Read'] // Add scopes as needed
// },
//     (accessToken, refreshToken, profile, done) => {
//         // Save accessToken and refreshToken if needed
//         return done(null, { tokens: { accessToken, refreshToken } });
//     }));

// // Outlook OAuth2 authentication route
// router.get('/outlook', passport.authenticate('oauth2'));

// // Outlook OAuth2 callback route
// router.get('/outlook/callback', passport.authenticate('oauth2', { failureRedirect: '/' }), (req, res) => {
//     res.redirect('/outlook_emails'); // Redirect to fetch emails route after successful authentication
// });

// module.exports = router;
