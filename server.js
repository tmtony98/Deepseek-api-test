import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());






// Test

import OpenAI from 'openai';

// Initialize OpenAI with OpenRouter API key
// Note: OpenRouter is a wrapper around OpenAI's API, so you can use it with OpenAI's library

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1', // Set the base path for OpenRouter
});

const callDeepSeek = async (userMessage) => {
  try {
    const response = await openai.chat.completions.create({
      model: "deepseek/deepseek-chat:free",
      messages: [{ role: 'user', content: userMessage }],
    });

    const content = response.choices[0].message.content;
    console.log(content);
    return content;

  } catch (error) {
    console.error('DeepSeek API Error:', error.response?.data || error.message);
    throw error;
  }
};

//using axios directly

// const callDeepSeek = async (userMessage) => {
//   try {
//     const response = await axios.post(
//         "https://openrouter.ai/api/v1/chat/completions",  // Fixed endpoint
//         {
//           model: "deepseek/deepseek-chat:free",
//           messages: [{ role: 'user', content: userMessage }],
//         },
//       {
//         headers: {
//           'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );
    
//     const content = response.data.choices[0].message.content;
//     console.log(content);
//     return content;
   
//   } catch (error) {
//     console.error('DeepSeek API Error:', error.response?.data || error.message);
//     throw error;
//   }
// };


// Test
callDeepSeek('What is the capital of France?');
 
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});