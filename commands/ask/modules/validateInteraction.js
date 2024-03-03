const validateInteraction = (interaction) => {
  if (!interaction.isCommand()) {
    return false;
  }
  if (interaction.replied) {
    return false;
  }
  if (interaction.deferred) {
    return false;
  }
  return interaction;
};

module.exports = validateInteraction;
