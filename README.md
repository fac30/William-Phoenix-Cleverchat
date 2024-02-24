# Cleverchat

This project is a discord chat bot that allows users to send messages to the discord bot and it will respond
with messages from the OpenAI API.

## Setup

To setup this project locally, you will need to fork the repository. This will allow to also add new features to the bot should you wish to do so. [Click here for step-by-step guide.](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

After forking the repo and cloning it to your local computer you will now have to login with an existing discord account or create a new one via [discord dev portal](https://discord.com/developers/).

Once you've logged, in you will have access to the Navigation bar that directs you to your apps, teams, a debugger and the documentation to creating an app for discord.

Before you start working on or running the project locally you must first create a bot for your server in the discord dev portal.

To do that click on the `Applications` tab and then `New Application`. Add a name for your bot and click `create`. You should now see the General Information page that allows you to edit the application's name, add a description and change its avatar.

##

**_ This section is important so pay attention. _**

Navigate to the Bot tab and you will see settings for your bot. Under the username you will see a button `Reset Token`. This will generate a token for your bot that is essentially its password to login to discord. It is vital that is kept secret so that someone else is unable to perform malicious acts with your bot.

**_ The token should look like this: `NzkyNzE1NDU0MTk2MDg4ODQy.X-hvzA.Ovy4MCQywSkoMRRclStW4xAYK7I` (this token is just a dummy!) _**

Now that you have setup your bot application, you will need to invite it to your server. To do that, navigate to the `URL Generator` in the `OAuth2` tab.

For scopes, select:

- bot
- application.commands

For permissions, select:
(_you're free to add more permissions to expand on the project_)

Under General permissions:

- Read Messages/ View Channels

Under Text permissions

- Send Messages
- Read Message History
- Manage Messages
- Use Slash Commands

_More info about permissions can be found [here](https://discord.com/developers/docs/topics/permissions)._

At the bottom of the page you'll see a generated url for your bot. Copy the url and paste it into your browser.
The link should take you to a page that prompts you to add the bot to a server. Make sure you have "Manage Server" permissions for the server to be able to do that.

Now that you've added the bot to your server it should appear in your server's member list.

## Configuring your bot

After adding your bot to your server, it is time to configure the keys required to run the bot.
This project uses the openai api to generate user responses so you are required to sign up for an api key over at [platform.openai.com](https://platform.openai.com/docs/overview)

Once, you've created an api key, return to the discord dev portal to find your cliend id, and discord token. Your application id can be found by right clicking on your server name above the chat channels in your server. Paste your ids and token into your .env file before you run the bot. A template in the root directory will show you an example how to name your keys.

After that you can run `node deploy-commands.js` to load the bot's commands and finally run `node index.js` to start the bot. If everything is running correctly you will see a console message `Ready! Logged in as "bot name"`.

## Adding Features

Whenever you add a new command, make sure the file is created in the commands folder otherwise the deploy-commnds.js script will not be able to find it. You also must run the script for every newly created or updated command.

## Contributions

[@Phoenix_Smart](https://github.com/RayFFH)
[@William_Man](https://github.com/william-man)
