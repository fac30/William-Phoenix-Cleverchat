const { Events, Client } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  async execute(interaction) {
    if (interaction.author.username && !interaction.author.bot) {
      await interaction.reply("Hello");
    }
  },
};
