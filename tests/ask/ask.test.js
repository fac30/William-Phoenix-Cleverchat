const { test } = require('node:test');

// Mocking a user interaction with some sample data
const userMessage = 'show me calculation for 1+1';
const userID = '123456789';

const interactionMock = {
  isCommand: () => true,
  options: {
    getString: () => userMessage,
  },
  user: {
    id: userID,
  },
  deferred: false,
  replied: false,
  deferReply: () => {
    interactionMock.deferred = true;
  },
  editReply: () => {
    interactionMock.replied = true;
  },
};

module.exports = interactionMock;