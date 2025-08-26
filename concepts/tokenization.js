// concepts/tokenization.js
const { encode, decode } = require('gpt-3-encoder');

const countTokens = (text) => {
    const encoded = encode(text);
    return encoded.length;
};

const tokenizeInput = (text) => {
    const encoded = encode(text);
    return encoded;
};

const detokenizeInput = (tokens) => {
    return decode(tokens);
};

module.exports = { countTokens, tokenizeInput, detokenizeInput };
