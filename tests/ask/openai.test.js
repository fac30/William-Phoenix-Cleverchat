const { test } = require('node:test');
const assert = require('assert');
const OpenAI = require("openai");
require('dotenv').config({ path: '../../.env' });
const interactionMock = require("../mocks/mockdata");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: "gpt-3.5-turbo",
});

test('OpenAI Response Unit Test', async () => {
  try {
    const userID = interactionMock.user.id;
    const userMessage = interactionMock.options.getString('input');

    const messages = [
      {
        role: 'user',
        content: userMessage,
      },
    ];

    const response = await openai.chat.completions.create({
      messages: messages,
      model: 'gpt-3.5-turbo',
    });

    const botResponse = response.choices[0].message.content;

    // Assertion to check the content of the OpenAI response
    console.log(botResponse)
    assert.strictEqual(botResponse, '1 + 1 = 2');

    console.log('OpenAI Response Unit Test passed.');
  } catch (error) {
    console.error('OpenAI Response Unit Test failed:', error);
    assert.fail('OpenAI Response Unit Test failed');
  }
});
