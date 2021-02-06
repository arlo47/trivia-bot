const COMMAND_CODE = '!';

const BOT_CHANNEL = 'bot_home';

const COMMANDS = {
  HELP: `${COMMAND_CODE}help`,
  TRIVIA: `${COMMAND_CODE}trivia`,
  HIGH_SCORES: `${COMMAND_CODE}highscores`,
  HINT: `${COMMAND_CODE}hint`,
};

module.exports = { COMMAND_CODE, COMMANDS, BOT_CHANNEL };
