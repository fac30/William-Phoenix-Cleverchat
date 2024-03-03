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

const deferredMock ={
    isCommand: () => true,
    options: {
      getString: () => userMessage,
    },
    user: {
      id: userID,
    },
    deferred: true,
    replied: false,
    deferReply: () => {
      interactionMock.deferred = true;
    },
    editReply: () => {
      interactionMock.replied = true;
    },

}

const falseCommandMock = {
    isCommand: () => false,
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

}

const repliedMock = {
    isCommand: () => true,
    options: {
      getString: () => userMessage,
    },
    user: {
      id: userID,
    },
    deferred: false,
    replied: true,
    deferReply: () => {
      interactionMock.deferred = true;
    },
    editReply: () => {
      interactionMock.replied = true;
    },

}

const nomessageMock = {
    isCommand: () => true,
    options: {
      getString: () => '',
    },
    user: {
      id: userID,
    },
    deferred: false,
    replied: true,
    deferReply: () => {
      interactionMock.deferred = true;
    },
    editReply: () => {
      interactionMock.replied = true;
    },

}

module.exports = {interactionMock, deferredMock, falseCommandMock, repliedMock, nomessageMock};