// zeroShot.js

const axios = require('axios');

const geminiAPIKey = 'YOUR_GEMINI_API_KEY'; // Replace with your Gemini API key

const zeroShotPrompt = async (prompt) => {
    const endpoint = 'https://api.gemini.com/v1/completions'; // Replace with actual Gemini API endpoint
    const headers = {
        'Authorization': `Bearer ${geminiAPIKey}`,
        'Content-Type': 'application/json',
    };

    const data = {
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.7,  // Adjust model behavior
    };

    try {
        const response = await axios.post(endpoint, data, { headers });
        const result = response.data;
        console.log('Response:', result.choices[0].text.trim()); // Extract the result from the response
        return result.choices[0].text.trim();
    } catch (error) {
        console.error('Error with the API request:', error);
    }
};

module.exports = zeroShotPrompt;
