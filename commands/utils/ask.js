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


