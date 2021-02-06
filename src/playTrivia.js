const TriviaManager = require('./classes/TriviaManager');
const { getAllUsers, upsertUserScore } = require('./utils/fireStoreUtils');
const { getQuestion } = require('./utils/triviaUtils');

let trivia;

const getTrivia = () => trivia;

const askQuestion = (msg) => {
  console.log(trivia.answer);
  msg.channel.send(':grey_question: Starting Trivia! :grey_question:');
  msg.channel.send(trivia.getFormattedQuestion());
};

const checkAnswer = (msg) => {
  const msgContent = msg.content;
  if (typeof trivia.question === 'string' && msgContent.toLowerCase() === trivia.answer.toLowerCase()) {
    msg.reply('Correct Answer!');
    const user = trivia.findUserById(msg.author.id);
    user.addScore(trivia.value);
    upsertUserScore(user)
      .then((result) => {
        console.log(result);
        msg.channel.send('Score has been updated');
        return getQuestion();
      })
      .then((doc) => {
        const { question } = doc;
        const { answer } = doc;
        const { value } = doc;
        trivia.setNewQuestion(question, answer, value);
        askQuestion(msg, trivia);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const initializeTrivia = (msg) => {
  Promise.all([getAllUsers(), getQuestion()])
    .then((docs) => {
      const users = docs[0];
      const { question } = docs[1];
      const { answer } = docs[1];
      const { value } = docs[1];
      const category = docs[1].category.title;
      trivia = new TriviaManager(users, question, answer, value, category);
      askQuestion(msg, trivia);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { initializeTrivia, getTrivia, checkAnswer };
