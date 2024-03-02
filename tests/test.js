"dummy file";

const { test } = require('node:test');
const assert = require('assert');
const OpenAI = require("openai");
const { SlashCommandBuilder } = require("discord.js");
require('dotenv').config({ path: '../.env' });
const { Configuration, OpenAIApi } = require("openai");
const interactionMock = require("./ask/ask.test");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
  model: "gpt-3.5-turbo",
});

const conversationHistories = [];

test('OpenAI Integration Test', async () => {
    try {
      // Defers user input allowing for OpenAI to take longer than 3 seconds to respond
      interactionMock.deferReply();
  
      // Replace interaction data with mock data
      const userID = interactionMock.user.id;
      const userMessage = interactionMock.options.getString('input');
  
      if (!Array.isArray(conversationHistories[userID])) {
        conversationHistories[userID] = [];
      }
      
      const messages = [
        {
          role: 'user',
          content:
            conversationHistories[userID]
             +
            userMessage,
        },
      ];
      console.log(messages);
  
      const response = await openai.chat.completions.create({
        messages: messages,
        model: 'gpt-3.5-turbo',
      });
  
      // Get the generated response from OpenAI
      const botResponse = response.choices[0].message;
      console.log(botResponse);
      // Saves the string of the response
      const botResponse2 = response.choices[0].message.content;
  
      // Adds String into conversation array
      conversationHistories[userID].push({
        role: 'user',
        content: userMessage,
      });
  
      conversationHistories[userID].push({
        role: 'bot',
        content: botResponse2,
      });
  
      // Assertion to check length of conversation history and the bot response
      assert.ok(conversationHistories.length > 0, 'Conversation history is empty.');
      assert.strictEqual(botResponse2, '1 + 1 = 2');
  
      console.log('OpenAI Integration Test passed.');
    } catch (error) {
      // if unable to connect to OpenAI throw an err
      console.error('OpenAI Integration Test failed:', error);
      assert.fail('OpenAI Integration Test failed');
    }
  });