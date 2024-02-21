const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  async execute(interaction) {
    if (interaction.author.username && !interaction.author.bot) {
      console.log(interaction);
      await interaction.reply("Hello");
    }
  },
};
