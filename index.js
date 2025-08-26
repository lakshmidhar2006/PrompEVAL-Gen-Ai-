// index.js

const zeroShotPrompt = require('./concepts/zeroshot');
const multiShotPrompt = require('./concepts/multiShot');

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
