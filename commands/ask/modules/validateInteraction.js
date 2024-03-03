const validateInteraction = (interaction) => {
  if (interaction.isCommand()) {
    return false;
  }
  if (interaction.replied) {
    return true;
  }
  if (interaction.deferred) {
    return true;
  }
  return interaction;
};

module.exports = validateInteraction;
