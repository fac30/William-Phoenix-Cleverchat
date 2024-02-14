const OpenAI = require('openai');
const { SlashCommandBuilder } = require("discord.js");
require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');




const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
  model: 'gpt-3.5-turbo'
});



module.exports = {
  data: new SlashCommandBuilder()
    .setName("ask")
    .setDescription("Replies with Pong!")
    .addStringOption(option =>
      option.setName('input')
        .setDescription('Testing input')
        .setRequired(true)),
      
        async execute(interaction) {
          console.log('Raw Interaction Data:', interaction.toJSON());
        
          const testInputValue = interaction.options.getString('input');
        
          if (!testInputValue) {
            // Handle the case when 'input' is required but not provided
            await interaction.reply("Please provide a value for 'input'.");
            return;
          }
        
          // Log the value of 'input'
          console.log(`Input Value: ${testInputValue}`);
          await interaction.reply("Pong!");
          console.log(interaction);
        }
      };

// module.exports = {
//   data: new SlashCommandBuilder()
//   .setName('ask')
// 	.setDescription('Replies with your input!')
// 	.addUserOption(option =>
// 		option.setName('usertest')
// 			.setDescription('The input to echo back')
// 			.setRequired(true))
//   .addStringOption(option =>
//     option.setName('testinput')
//       .setDescription('Testing input')

//     ),

//       async execute(interaction) {

//         const userQuestion = interaction.options.getString('input');
//        console.log(interaction);
//       }


// }










































// module.exports = {
//   data: new SlashCommandBuilder()
//     .setName("ask")
//     .setDescription("Ask the bot a question."),
    
//   async execute(interaction) {
//     // Get the user's question from the interaction
//     const userQuestion = interaction.options.getString('question');
//     console.log(userQuestion);
//     // Generate a response using OpenAI
//     const openaiResponse = await generateOpenAIResponse(userQuestion);

//     // Reply to the user with the OpenAI-generated response
//     await interaction.reply(openaiResponse);
//   },
// };

// async function generateOpenAIResponse(userQuestion) {
//     try {

  
//       // Use OpenAI API to generate a response based on the user's question
//       const response = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo',
//         prompt: `User: ${userQuestion}\nBot:`,
//         max_tokens: 100,
//       });
  
//       console.log("OpenAI API Response:", response);
  
//       // Extract the generated response from OpenAI's API response
//       const generatedResponse = response.choices[0].text.trim();
  
//       return generatedResponse;
//     } catch (error) {
//       console.error("Error generating OpenAI response:", error);
//       return "Sorry, I couldn't generate a response at the moment.";
//     }
//   }