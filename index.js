// index.js

const zeroShotPrompt = require('./concepts/zeroshot');
const multiShotPrompt = require('./concepts/multishot');
const dynamicPrompt = require('./concepts/dynamicprompt');
const oneShotPrompt = require('./concepts/oneshot');  // Import one-shot prompt

// Zero-shot example
const zeroShotPromptText = 'Explain how zero-shot prompting works for large language models and provide an example of its use case.';
zeroShotPrompt(zeroShotPromptText).then((zeroShotResponse) => {
    console.log('Zero-shot Prompt Response:', zeroShotResponse);
});

// Multi-shot example
const multiShotExamples = [
    "Example 1:\nText: 'I love this movie!'\nSentiment: Positive",
    "Example 2:\nText: 'I hate waiting in line.'\nSentiment: Negative",
    "Example 3:\nText: 'This place has great food, but the service is slow.'\nSentiment: Mixed"
];
const newTextForMultiShot = "The book was boring, but the characters were interesting.";
multiShotPrompt(multiShotExamples, newTextForMultiShot).then((multiShotResponse) => {
    console.log('Multi-shot Prompt Response:', multiShotResponse);
});

// One-shot example
const example = "Example:\nText: 'I love this movie!'\nSentiment: Positive";
const newTextForOneShot = "The food was awful and cold.";
oneShotPrompt(example, newTextForOneShot).then((oneShotResponse) => {
    console.log('One-shot Prompt Response:', oneShotResponse);
});

// Dynamic prompting example
const basePrompt = 'Explain the concept of dynamic prompting in AI models.';
const tone = 'formal';  // Change to 'informal' for casual tone
const detailLevel = 'detailed';  // Change to 'brief' or 'detailed'
dynamicPrompt(basePrompt, tone, detailLevel).then((dynamicResponse) => {
    console.log('Dynamic Prompt Response:', dynamicResponse);
});
