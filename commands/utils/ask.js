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
      option.setName('input').setDescription('Testing input').setRequired(true)),
      
        async execute(interaction) {
          console.log('Raw Interaction Data:', interaction.toJSON());
          
          //Ensures that the interaction is a command

          if (!interaction.isCommand()) return;

            // Ensure it's not handled multiple times
          if (interaction.replied || interaction.deferred) return;
        
          const userMessage = interaction.options.getString('input');
        
          if (!userMessage) {
            await interaction.reply("Please provide a value for 'input'.");
            return;
          }
        
          try {
            //Defers user input allowing for OpenAI to take longer than 3 seconds to respond
            await interaction.deferReply();
            // Send the user's input to the OpenAIAPI
              const response = await openai.chat.completions.create({
                messages: [{ role: 'user', content: userMessage }],
                model: 'gpt-3.5-turbo',
              });
              
            
        
            // Get the generated response from OpenAI
            const botResponse = response.choices[0].message;
        
            // Reply to the user with the generated response
            await interaction.editReply(botResponse);
          } catch (error) {
            console.error('Error fetching response from OpenAI:', error);
            await interaction.reply('An error occurred while processing your request.');
          }
        }
      }










































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