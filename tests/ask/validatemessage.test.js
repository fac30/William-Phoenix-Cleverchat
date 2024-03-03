const assert = require('assert');
const { test } = require('node:test');
const validateMessage  = require("../../commands/ask/modules/validateMessage")

const {interactionMock, deferredMock, falseCommandMock, repliedMock, nomessageMock} = require("../mocks/mockdata");


test('Valid Content in message Test', () => {

    const userMessage = interactionMock.options.getString("input");
    // Assertion to check if the message is valid
    const isValidMessage = validateMessage(interactionMock)
    assert.strictEqual(isValidMessage, userMessage);
   
  });
  
  test('No content in message Test', () => {

    const userMessage = nomessageMock.options.getString("input");
    // Assertion to check if the message is valid
    const isValidMessage = validateMessage(nomessageMock)
    assert.strictEqual(isValidMessage, "Please provide a value for 'input'.");
   
  });
  
  