const { SlashCommandBuilder } = require("discord.js");

// test command; type /ping in discord chat box to get the response 'Pong!'
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    await interaction.reply("Pong!");
  },
};
