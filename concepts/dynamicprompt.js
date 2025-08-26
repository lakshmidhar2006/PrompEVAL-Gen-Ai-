// concepts/dynamicPrompt.js

const axios = require('axios');

const geminiAPIKey = 'YOUR_GEMINI_API_KEY'; // Replace with your Gemini API key

const dynamicPrompt = async (basePrompt, tone = 'informal', detailLevel = 'normal', topP = 0.9) => {
    const endpoint = 'https://api.gemini.com/v1/completions'; // Replace with actual Gemini API endpoint
    const headers = {
        'Authorization': `Bearer ${geminiAPIKey}`,
        'Content-Type': 'application/json',
    };

    // Adjust the base prompt based on the tone and detail level
    let dynamicPromptText = basePrompt;

    if (tone === 'formal') {
        dynamicPromptText = `Please respond in a formal tone: ${basePrompt}`;
    } else if (tone === 'informal') {
        dynamicPromptText = `Respond in a casual, conversational tone: ${basePrompt}`;
    }

    if (detailLevel === 'brief') {
        dynamicPromptText = `Please provide a brief response: ${dynamicPromptText}`;
    } else if (detailLevel === 'detailed') {
        dynamicPromptText = `Please provide a detailed response: ${dynamicPromptText}`;
    }

    const data = {
        prompt: dynamicPromptText,
        max_tokens: 150,
        temperature: 0.7,  // Adjust model behavior
        top_p: topP,       // Include Top-P sampling
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

module.exports = dynamicPrompt;
