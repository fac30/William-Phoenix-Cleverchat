const { test } = require('node:test');
const assert = require('assert');
const interactionMock = require("../mocks/mockdata");

const conversationHistories = []; 


function appendChatHistory(userID, userMessage, botResponse) {
  if (!Array.isArray(conversationHistories[userID])) {
    conversationHistories[userID] = [];
  }

  conversationHistories[userID].push({
    role: 'user',
    content: userMessage,
  });

  conversationHistories[userID].push({
    role: 'bot',
    content: botResponse,
  });
}

test('Chat History Appending Unit Test', () => {
  try {
   
    const userID = interactionMock.user.id;
    const userMessage = interactionMock.options.getString('input');
    const botResponse = '1 + 1 = 2';

    // Call the function to append chat history
    appendChatHistory(userID, userMessage, botResponse);

    // Assertion to check if chat history is appended correctly
    assert.strictEqual(conversationHistories[userID].length, 2, 'Unexpected length of chat history');
    assert.strictEqual(conversationHistories[userID][0].role, 'user', 'User role is incorrect');
    assert.strictEqual(conversationHistories[userID][0].content, userMessage, 'User message is incorrect');
    assert.strictEqual(conversationHistories[userID][1].role, 'bot', 'Bot role is incorrect');
    assert.strictEqual(conversationHistories[userID][1].content, botResponse, 'Bot response is incorrect');

    console.log('Chat History Appending Unit Test passed.');
  } catch (error) {
    console.error('Chat History Appending Unit Test failed:', error);
    assert.fail('Chat History Appending Unit Test failed');
  }
});