const { Events } = require("discord.js");

// message listener; when the bot or channel receives a user message it responds with 'Hello'
module.exports = {
  name: Events.MessageCreate,
  async execute(interaction) {
    if (interaction.author.username && !interaction.author.bot) {
      console.log(interaction);
      await interaction.reply("Hello");
    }
  },
};
