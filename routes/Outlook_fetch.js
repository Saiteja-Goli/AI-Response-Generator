// // routes/Outlook_fetch.js
// const express = require('express');
// const router = express.Router();
// const { ClientSecretCredential } = require('@azure/identity');
// const { Client } = require('@microsoft/microsoft-graph-client');

// // Fetch emails route
// router.get('/outlook_emails', async (req, res) => {
//   try {
//     const credential = new ClientSecretCredential(
//       process.env.TENANT_ID,
//       process.env.CLIENT_ID,
//       process.env.CLIENT_SECRET,
//       {
//         tokenCache: req.session.tokenCache // Access token cache from session
//       }
//     );
    
//     const graphClient = Client.initWithMiddleware({
//       authProvider: async (done) => {
//         const token = await credential.getToken('https://graph.microsoft.com/.default');
//         done(null, token.token);
//       }
//     });

//     const result = await graphClient.api('/me/messages').get();
//     res.json(result.value);
//   } catch (error) {
//     console.error('Error fetching emails:', error);
//     res.status(500).json({ error: 'An error occurred while fetching emails' });
//   }
// });

// module.exports = router;
