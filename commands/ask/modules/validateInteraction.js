const validateInteraction = (interaction) => {
  if (interaction.replied) {
    return true;
  }
  if (interaction.deferred) {
    return true;
  }
  if (interaction.isCommand()) {
    true;
  }
};

module.exports = {
  validateInteraction,
};
