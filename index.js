// Require the necessary discord.js classes
const fs = require("node:fs"); //file system module for intereacting with files
const path = require("node:path"); //path module for working with directory paths
const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
} = require("discord.js");
const { config } = require("dotenv");
const { Channel } = require("node:diagnostics_channel");


config(); // Load environment variables from .env file

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [Partials.Channel, Partials.Message],
});
client.commands = new Collection(); // accessing commands from other files; stores and retrieve commands for execution.

const foldersPath = path.join(__dirname, "commands"); // path to commands folder;
const commandFolders = fs.readdirSync(foldersPath); // read all contents of current path; adds all subfolder names into array

for (const folder of commandFolders) {
  // loop through array of subfolder names inside the commands folder
  const commandsPath = path.join(foldersPath, folder); // create path for current subfolder
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js")); // read contents inside .js files; adds file names into array
  for (const file of commandFiles) {
    // add all commands into the clien.commands Collection
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
}

const eventsPath = path.join(__dirname, "events");
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

// Log in to Discord with your client's token from the environment variable
client.login(process.env.DISCORD_TOKEN);







