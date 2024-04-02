const express = require('express');
const router = express.Router();
const { ClientSecretCredential } = require('@azure/identity');
const { Client } = require('@microsoft/microsoft-graph-client');
require("dotenv").config();

// Fetch emails route
router.get('/outlook_emails', async (req, res) => {
    try {
        const credential = new ClientSecretCredential(
            process.env.OUTLOOK_TENANT_ID,
            process.env.OUTLOOK_CLIENT_ID,
            process.env.OUTLOOK_CLIENT_SECRET,
        );

        const graphClient = Client.initWithMiddleware({
            // Fix: Use an arrow function to preserve 'this' context
            authProvider: async () => {
                try {
                    const token = await credential.getToken('https://graph.microsoft.com/.default');
                    return { accessToken: token.token };
                } catch (error) {
                    console.error('Error fetching access token:', error);
                    throw error; // Re-throw the error for proper handling
                }
            }
        });

        const result = await graphClient.api('/me/messages').get();
        res.json(result.value);
    } catch (error) {
        console.error('Error fetching emails:', error);
        res.status(500).json({ error: 'An error occurred while fetching emails' });
    }
});

module.exports = router;
