const OpenAI = require('openai');
const { SlashCommandBuilder } = require("discord.js");
require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');






const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
  model: 'gpt-3.5-turbo'
});


const conversationHistory = [];


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
            //Array containing the chat history
            const messages = [{ role: 'user', content: conversationHistory.join('\n') + '\n' + userMessage }];

              const response = await openai.chat.completions.create({
                messages: messages,
                model: 'gpt-3.5-turbo',
              });
        
            // Get the generated response from OpenAI
            const botResponse = response.choices[0].message;
            //Saves the string of the response
            const botResponse2 = response.choices[0].message.content;

            //Adds String into conversation array
            conversationHistory.push(botResponse2);
        
            // Reply to the user with the generated response
            await interaction.editReply(botResponse);
          } catch (error) {
            console.error('Error fetching response from OpenAI:', error);
            await interaction.reply('An error occurred while processing your request.');
          }
        }
      }


