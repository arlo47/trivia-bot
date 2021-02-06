const { COMMANDS, COMMAND_CODE } = require('./constants/command');
const { initializeTrivia } = require('./playTrivia');

const processCommand = (msg) => {
  const msgContent = msg.content;

  if (msgContent.startsWith(COMMANDS.HELP)) {
    // eslint-disable-next-line quotes
    return msg.channel.send(
      `Domo Arigato friend! Here is a list of my commands:
        ${COMMANDS.HELP} - get a list of commands
        ${COMMANDS.TRIVIA} - start game of trivia
        ${COMMANDS.HINT} - get hint on trivia question
        ${COMMANDS.HIGH_SCORES} - get list of trivia high scores`,
    );
  }

  if (msgContent.startsWith(COMMANDS.TRIVIA)) {
    return initializeTrivia(msg);
  }

  msg.channel.send(`Unrecognized Command, type ${COMMANDS.HELP} to see a list of my commands.`);
};

module.exports = { processCommand };
