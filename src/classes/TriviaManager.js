const HintBuilder = require('./HintBuilder');

class TriviaManager {
  constructor(users, question, answer, value, category) {
    this.users = users;
    this.question = question;
    this.answer = this.sanitizeAnswer(answer);
    this.value = value;
    this.category = category;
    this.hintBuilder = new HintBuilder(answer);
  }

  getFormattedQuestion() {
    return `Category: ${this.category}\n${this.question}, for $${this.value}`;
  }

  isPlayingTrivia() {
    return this.question;
  }

  findUserById(id) {
    return this.users.find((user) => user.fireStoreId === id);
  }

  setNewQuestion(question, answer, value) {
    this.question = question;
    this.answer = answer;
    this.value = value;
    this.hintBuilder = new HintBuilder(answer);
  }
}

module.exports = TriviaManager;
