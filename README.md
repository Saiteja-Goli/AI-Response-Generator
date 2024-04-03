# AI-Response-Generator


This tool automates email responses using AI. It reads incoming emails, understands their content, and generates suitable replies. It saves time and ensures quick, relevant responses. The system securely connects to Gmail, sends AI-generated responses, and helps users manage emails efficiently.



## Project Type
| Backend |

## Deplolyed App
Backend: https://ai-response-generator-1.onrender.com/

## Features
- OAuth2 Authentication: Allows users to authenticate using Google OAuth2 protocols.
- Email Fetching: Fetches emails from the user's Gmail accounts.
- Email Processing: Processes fetched emails using an AI model to generate responses.
- Automated Response: Sends AI-generated responses to unread emails.
- Session Management: Manages user sessions using Express session middleware.
- Error Handling: Provides error handling for various scenarios.


## Installation & Getting started

1. **Clone the repository** 
```bash
  git clone https://github.com/Saiteja-Goli/AI-Response-Generator
```
2. **Install dependencies**
```bash
  npm install
```

3. **Set up environment variables** 
Create a .env file with the following variables:
```bash
PORT=9000

SESSION_SECRET=Your_Session_Secret
GOOGLE_CLIENT_ID=Your_Google_Client_ID
GOOGLE_CLIENT_SECRET=Your_Google_Client_Secret
GOOGLE_REDIRECT_URI=http://localhost:9000/auth/google/callback
GMAIL_ADDRESS=Your_Gmail_Address
GMAIL_PASSWORD=Your_Gmail_Password


OUTLOOK_CLIENT_ID=Your_OutlookMail_Address
OUTLOOK_CLIENT_SECRET=Your_OutlookMail_Secret
OUTLOOK_TENANT_ID=Your_Outlook_Tenent
OUTLOOK_REDIRECT_URI=http://localhost:9000/auth/outlook/callback

GEMINI_API_KEY=Your_Google_API_Key

```
4. **Start the server**
```bash
npm start
Access the server at :- http://localhost:9000/
```

# Routes

# Authentication Routes

## Google OAuth2

- **GET /auth/google**: Initiates Google OAuth2 authentication.
- **GET /auth/google/callback**: Callback route for handling Google OAuth2 authentication.

## Outlook OAuth2

- **GET /auth/outlook**: Initiates Outlook OAuth2 authentication.
- **GET /auth/outlook/callback**: Callback route for handling Outlook OAuth2 authentication.

# Email Routes

- **GET /emails**: Fetches and sends Analysed AI generated email to unread emails from the user's Gmail account.



# Tech Stack

## Backend Dependencies

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Express Session**: Simple session middleware for Express.
- **Dotenv**: Loads environment variables from a .env file into process.env.
- **Google Auth Library**: Google's officially supported Node.js client library for OAuth 2.0 authentication.
- **Googleapis**: Google's officially supported Node.js client library for accessing Google APIs.
- **Nodemailer**: Easy-to-use module for sending emails from Node.js.
- **Nodemon**: Utility that automatically restarts the server when changes are detected.
- **Passport**: Simple, unobtrusive authentication middleware for Node.js.
- **Passport Google OAuth2.0**: Passport strategy for authenticating with Google using OAuth 2.0.
- **Passport Outlook**: Passport strategy for authenticating with Outlook using OAuth 2.0.

## External APIs

- **Azure Identity**: Azure SDK library for identity management in Node.js applications.
- **Google Generative AI**: Google's library for accessing generative AI models for text generation.
- **Microsoft Graph Client**: Microsoft's official library for accessing Microsoft Graph API from Node.js applications.
