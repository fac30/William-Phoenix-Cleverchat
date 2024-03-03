const assert = require('assert');
const { test } = require('node:test');


mockInteraction = require("../mocks/mockdata");


test('Validate Interaction Test', () => {
    const validateInteraction = (interaction) => {
      if (interaction.replied) {
        return true;
      } else if (interaction.deferred) {
        return true;
      } else if (interaction.isCommand()) {
        return true;
      }
    
      return false; // If none of the conditions are met
    };
  
 
    const isValidInteraction = validateInteraction(mockInteraction);
  
    // Assertion to check if the interaction is valid
    assert.ok(isValidInteraction, 'Interaction is not valid');
  });