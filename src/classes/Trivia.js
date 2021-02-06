const {
  VOWELS,
  CONSONANTS,
  HINT_REDUCTION_MAP,
  DETERMINERS,
} = require('../constants/trivia');

class Trivia {
  constructor(users, question, answer, value, category) {
    this.users = users;
    this.question = question;
    this.answer = this.sanitizeAnswer(answer);
    this.value = value;
    this.category = category;
  }

  /**
   * @author Greg Fitzpatrick
   *
   * @description sanitizes strings received from API that
   * include '\', '"' & HTML elements
   *
   * @param {String} text
   * @returns {String}
   */
  sanitizeAnswer(text) {
    return text.replace(/<[^>]*>?/gm, '').replace(/["]+/g, '').replace(/[\\]+/g, '');
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
  }
}

module.exports = Trivia;
