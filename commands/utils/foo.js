const { SlashCommandBuilder } = require("discord.js");

// testing options for slash commands; command requires 2 inputs and the bot returns those inputs

module.exports = {
  data: new SlashCommandBuilder()
    .setName("foo")
    .setDescription("testing foobar")
    .addStringOption((option) =>
      option.setName("fooed").setDescription("fooing").setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("barred").setDescription("barring").setRequired(true)
    ),

  async execute(interaction) {
    console.log(interaction.options.getString("fooed"));
    console.log(interaction.options.getString("barred"));
    console.log(interaction.options);
    await interaction.reply(interaction.options.getString("fooed"));
    await interaction.followUp(interaction.options.getString("barred"));
  },
};
