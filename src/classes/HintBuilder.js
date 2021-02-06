const {
  VOWELS,
  CONSONANTS,
  HINT_REDUCTION_MAP,
  DETERMINERS,
} = require('../constants/trivia');

class HintBuilder {
  constructor(answer) {
    this.hint = this.initializeHint(answer);
  }

  initializeHint(answer) {
    return answer.split('').map((letter) => (letter === ' ' ? ' ' : '-')).join('');
  }

  populateDeterminers(hint, answer) {
    DETERMINERS.forEach((determiner) => {
      const reg = new RegExp(`\\b${determiner}\\b`, 'i');
      const determinerIndex = answer.search(reg);

      if (determinerIndex !== -1) {
        determiner.split('').forEach((letter, i) => {
          hint[determinerIndex + i] = letter;
        });
      }
    });
    return hint;
  }
}

module.exports = HintBuilder;
