// index.js

const zeroShotPrompt = require('./concepts/zeroshot');

const prompt = 'Explain how zero-shot prompting works for large language models and provide an example of its use case.';

zeroShotPrompt(prompt).then((response) => {
    console.log('Zero-shot Prompt Response:', response);
});
