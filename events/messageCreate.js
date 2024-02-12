const { Events, Client } = require("discord.js");

module.exports = {
  name: "test",
  async execute(interaction) {
    if (interaction.author.username && !interaction.author.bot) {
      console.log(interaction);
      await interaction.reply("Hello");
    }
  },
};
