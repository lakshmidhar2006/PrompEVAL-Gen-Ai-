// concepts/oneShot.js

const axios = require('axios');

const geminiAPIKey = 'YOUR_GEMINI_API_KEY'; // Replace with your Gemini API key

const oneShotPrompt = async (example, newText) => {
    const endpoint = 'https://api.gemini.com/v1/completions'; // Replace with actual Gemini API endpoint
    const headers = {
        'Authorization': `Bearer ${geminiAPIKey}`,
        'Content-Type': 'application/json',
    };

    // Construct the one-shot prompt by combining the example with the new text
    const prompt = `${example}\n\nNow, classify the sentiment of the following text:\nText: "${newText}"`;

    const data = {
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.7,  // Adjust model behavior
    };

    try {
        const response = await axios.post(endpoint, data, { headers });
        const result = response.data;
        console.log('Response:', result.choices[0].text.trim());
        return result.choices[0].text.trim();
    } catch (error) {
        console.error('Error with the API request:', error);
    }
};

module.exports = oneShotPrompt;
