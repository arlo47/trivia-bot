require('dotenv').config({ path: `${__dirname}/../env/.env` });
const { Client } = require('discord.js');
const { COMMAND_CODE, COMMANDS, BOT_CHANNEL } = require('./constants/command');
const { intilializeFireStore } = require('./database/firestore');

const client = new Client();
intilializeFireStore();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  // do not process bot messages
  if (msg.author.bot) {
    return;
  }

  if (msg.content[0] === COMMAND_CODE) {
    console.log('commmand code detected');
  }
});

client.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.chache.find((ch) => ch.name === BOT_CHANNEL);
  channel.send(
    `Domo Arigato ${member}! I am Mr. Roboto.\n
    You can see a list of my commands by typing ${COMMANDS.HELP} in #${BOT_CHANNEL}`,
  );
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
