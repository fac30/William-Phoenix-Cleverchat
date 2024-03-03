const assert = require('assert');
const { test } = require('node:test');
const validateInteraction  = require("../../commands/ask/modules/validateInteraction")

const {interactionMock, deferredMock, falseCommandMock, repliedMock} = require("../mocks/mockdata");


test('Validate Interaction Test', () => {

    console.log(interactionMock)

    const isValidInteraction = validateInteraction(interactionMock);
   
  
    // Assertion to check if the interaction is valid

    console.log(isValidInteraction)
    console.log(isValidInteraction)
    assert.ok(isValidInteraction, interactionMock);
    
    
    
  });