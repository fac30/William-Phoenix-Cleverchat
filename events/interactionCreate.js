const { Events } = require("discord.js");

// Listener for the client event: interactionCreate, that will execute code when the bot receives an interaction.

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return; // returns boolean; checks whether interaction is a chat command.

    const command = interaction.client.commands.get(interaction.commandName); // finds matching command in the client.commands collection based on the interaction.commandName recieved
    if (!command) {
      console.error(
        `No command matching ${interaction.commandName} was found.`
      );
      return; // console log error if there is no matching command name
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      // catch block when there is an error running the command or it takes too long to run
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: "There was an  error while executing this command!",
          ephemeral: true,
        });
      } else {
        await interaction.reply({
          content: "There was an  error while executing this command!",
          ephemeral: true,
        });
      }
    }
  },
};
