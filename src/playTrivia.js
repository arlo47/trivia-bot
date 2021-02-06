const Trivia = require('./classes/Trivia');
const { getAllUsers } = require('./utils/fireStoreUtils');
const { getQuestion } = require('./utils/triviaUtils');

const askQuestion = (msg, trivia) => {
  msg.channel.send(':grey_question: Starting Trivia! :grey_question:');
  msg.channel.send(trivia.getFormattedQuestion());
};

const initializeTrivia = (msg) => {
  Promise.all([getAllUsers(), getQuestion()])
    .then((docs) => {
      const users = docs[0];
      const { question } = docs[1];
      const { answer } = docs[1];
      const { value } = docs[1];
      const category = docs[1].category.title;
      const trivia = new Trivia(users, question, answer, value, category);
      askQuestion(msg, trivia);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { initializeTrivia };
