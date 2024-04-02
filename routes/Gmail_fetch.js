const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const { google } = require('googleapis');
const router = express.Router();
const { analyzeEmail } = require("../controllers/GeminiAPI");
const nodemailer = require('nodemailer');
require('dotenv').config();

router.get('/emails', async (req, res) => {
  try {
    const oauth2Client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_REDIRECT_URI);
    oauth2Client.setCredentials(req.session.tokens);

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    const response = await gmail.users.messages.list({ userId: "me" });

    if (!response.data.messages.length) {
      res.send("No Emails in Inbox");
      return;
    }

    let allRead = true; // Assume all emails are read initially

    for (const emailMetadata of response.data.messages) {
      try {
        const email = await gmail.users.messages.get({ userId: "me", id: emailMetadata.id, format: "full" });
        const senderEmail = email.data.payload.headers.find(header => header.name === 'From').value;
        const emailBody = email.data.snippet;
        const messageId = email.data.id;
        const isUnread = email.data.labelIds.includes('UNREAD');

        if (isUnread) {
          const analyzedAIResponse = await analyzeEmail(emailBody);
          await sendEmail(senderEmail, analyzedAIResponse);  
          console.log(`Email from ${senderEmail} processed and analyzedAIResponse Sent.`);
          allRead = false; // At least one email is unread
        }
      } catch (error) {
        console.error(`Error processing email ${emailMetadata.id}:`, error);
      }
    }

    if (allRead) {
      res.send({ "Message": "All Emails are already read" });
    } else {
      res.send({ "Message": "Email processing completed" });
    }
  } catch (error) {
    console.error("Error fetching and processing emails:", error);
    res.status(500).send("An error occurred while fetching and processing emails");
  }
});

async function sendEmail(senderEmail, analyzedAIResponse) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.GMAIL_ADDRESS, pass: process.env.GMAIL_PASSWORD }
    });

    const mailOptions = {
      from: process.env.GMAIL_ADDRESS,
      to: senderEmail,
      subject: 'AI Generated Response',
      text: analyzedAIResponse
    };

    await transporter.sendMail(mailOptions);

  } catch (error) {
    console.error(`Error sending email to ${senderEmail}:`, error);
  }
}


module.exports = router;



