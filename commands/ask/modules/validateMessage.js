const validateMessage = (interaction) => {
  const userMessage = interaction.options.getString("input");
  if (userMessage) {
    return userMessage;
  } else {
    return "Please provide a value for 'input'.";
  }
};

module.exports = validateMessage;
