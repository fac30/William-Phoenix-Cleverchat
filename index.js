// Require the necessary discord.js classes
const fs = require("node:fs"); //file system module for intereacting with files
const path = require("node:path"); //path module for working with directory paths
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
const { config } = require("dotenv");

config(); // Load environment variables from .env file

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
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

// Receiving command interactions

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return; // returns boolean; checks whether interaction is a chat command.

  const command = interaction.client.commands.get(interaction.commandName); // finds matching command in the client.commands collection based on the interaction.commandName recieved
  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return; // console log error if there is no matching command name
  }

  try {
    await command.execute(interaction);
  } catch (error) {
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
});

// Executing commands

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token from the environment variable
client.login(process.env.DISCORD_TOKEN);







