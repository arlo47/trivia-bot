const VOWELS = ['a', 'e', 'i', 'o', 'u', 'y'];
const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

const DETERMINERS = [
  'a',
  'an',
  'and',
  '&',
  'the',
  'this',
  'these',
  'that',
  'those',
  'is',
  'my',
  'our',
  'there',
  'their',
  'they\'re',
  'his',
  'her',
  'of',
];

// amount each question value reduces after each hint
const HINT_REDUCTION_MAP = {
  200: 40,
  400: 80,
  600: 120,
  800: 160,
  1000: 200,
};

module.exports = {
  VOWELS, CONSONANTS, HINT_REDUCTION_MAP, DETERMINERS,
};
