const express = require('express');
const { Client, GatewayIntentBits, Events } = require('discord.js');
const { config } = require('dotenv');

const app = express();
const port = 3000;

config(); // Load environment variables from .env file

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
client.once(Events.ClientReady, readyClient => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token from the environment variable
client.login(process.env.DISCORD_TOKEN);

app.get('/callback', async (req, res) => {
  const code = req.query.code;

  // Exchange the code for a bot token (if needed)
  // In this example, we assume you already have the bot token in the .env file
  const botToken = process.env.DISCORD_TOKEN;

  // Now you have the bot token, you can use it to log in your bot or perform other actions
  // For example, you might want to store the bot token securely and use it in your bot's code
  console.log('Bot Token:', botToken);

  // Additional setup or actions after successful authorization
  console.log('Bot is ready!');

  res.send('Authorization successful! You can close this tab now.');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:3000`);
});
