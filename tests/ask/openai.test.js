const { test } = require('node:test');
const assert = require('assert');
const OpenAI = require("openai");
require('dotenv').config({ path: '../../.env' });
const {interactionMock, deferredMock, falseCommandMock, repliedMock} = require("../mocks/mockdata");

const { createMessage, fetchMessage  } = require("../../commands/ask/modules/createMessage")
const { successResponse, failResponse } = require("../mocks/messages");



test('OpenAI Response Unit Test', async () => {
   
    //console.log(successResponse.choices[0].messages)
    const response = await createMessage(successResponse, ()=>{successResponse}) 
    //console.log(response)

    assert.strictEqual(response.ok, true);

    //assert.strictEqual(response.messages, 'you did it');

});



// test('OpenAI Response Unit Test', async () => {
   
//         const userMessage = interactionMock.options.getString('input');
//         const messages = [
//             {
//               role: "user",
//               content: userMessage,
//             },
//           ];
//           console.log(userMessage)
//         const results = await createMessage(messages, fetchMessage)
//         //console.log(results)

//         const botResponse = results.choices[0].message.content;

//         console.log(botResponse)

//         assert.strictEqual(botResponse, '1 + 1 = 2');

// )};

    // test('OpenAI Response Unit Test', async () => {
    //     try {
    
    //         const results = createMessage(messages, fetchMessage)
    
    //         const botResponse = results.choices[0].message.content;
    
    //         assert.ok(botResponse, 'empty string return result');
    
    // } catch (error) {
    //         console.error('OpenAI Response Unit Test failed:', error);
    //         assert.fail('OpenAI Response Unit Test failed');
    //       }
    //     });
    




// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
//   model: "gpt-3.5-turbo",
// });

//test('OpenAI Response Unit Test', async () => {
//   try {
//     const userID = interactionMock.user.id;
//     const userMessage = interactionMock.options.getString('input');

//     const messages = [
//       {
//         role: 'user',
//         content: userMessage,
//       },
//     ];

//     const response = await openai.chat.completions.create({
//       messages: messages,
//       model: 'gpt-3.5-turbo',
//     });

//     const botResponse = response.choices[0].message.content;

//     // Assertion to check the content of the OpenAI response
//     console.log(botResponse)
//     assert.strictEqual(botResponse, '1 + 1 = 2');

//     console.log('OpenAI Response Unit Test passed.');
//   } catch (error) {
//     console.error('OpenAI Response Unit Test failed:', error);
//     assert.fail('OpenAI Response Unit Test failed');
//   }
// });
