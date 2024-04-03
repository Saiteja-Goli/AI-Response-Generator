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
SESSION_SECRET="SAI0407"

GOOGLE_CLIENT_ID="1066004373746-gtg3otdn0eb7t9jr124l7qe4phpg5q1b.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="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"
GOOGLE_REDIRECT_URI="http://localhost:9000/auth/google/callback"

OUTLOOK_CLIENT_ID="b0931c41-93ba-47b4-bf25-f0c356596d5d"
OUTLOOK_CLIENT_SECRET="czg8Q~gaJOvloqnx-kzN5JlAbjUANvyMFoJZecp3"
OUTLOOK_TENANT_ID="f8cdef31-a31e-4b4a-93e4-5f571e91255a"
OUTLOOK_REDIRECT_URI="http://localhost:9000/auth/outlook/callback"

GEMINI_API_KEY="AIzaSyBqWPT_C92somaFXwp7JgZ-JpZUJ9cn8lc"

GMAIL_ADDRESS="saitejagoli666@gmail.com"
GMAIL_PASSWORD="ealohtcvtikmwdfu"


```
4. **Start the server**
```bash
npm start
Access the server at :- http://localhost:9000/
```

# Routes
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
