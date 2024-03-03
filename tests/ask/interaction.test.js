const assert = require('assert');
const { test } = require('node:test');
const validateInteraction  = require("../../commands/ask/modules/validateInteraction")

const {interactionMock, deferredMock, falseCommandMock, repliedMock} = require("../mocks/mockdata");


test('Validate Interaction Test', () => {

    const isValidInteraction = validateInteraction(interactionMock);
    // Assertion to check if the interaction is valid
    assert.strictEqual(isValidInteraction, interactionMock);
   
  });
  test('Deferred interaction Test', () => {

    const isValiddeferred = validateInteraction(deferredMock);
    assert.strictEqual(isValiddeferred, false);

  });
  test('False Command Test', () => {

    const isValidfalsecommand = validateInteraction(falseCommandMock);
    assert.strictEqual(isValidfalsecommand, false);
    
  });
  test('RepliedMock interaction Test', () => {

    const isValidrepliedMock = validateInteraction(repliedMock);
    assert.strictEqual(isValidrepliedMock, false);
    
  });