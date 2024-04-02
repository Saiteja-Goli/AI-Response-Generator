const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const apiKey = process.env.GEMINI_API_KEY;
const generativeAI = new GoogleGenerativeAI(apiKey);

async function analyzeEmail(emailContent) {
  try {
    // Adjust the prompt to include the email content
    const prompt = `Email Content: ${emailContent}\nInstructions:
1. Read the email content carefully.
2. Provide a response based on the content.`;

    // Use the adjusted prompt to generate the AI response
    const model = generativeAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const generatedText = await response.text();
    return generatedText;
  } catch (error) {
    console.error("Google Generative AI request failed:", error);
    throw error;
  }
}

module.exports = { analyzeEmail };
