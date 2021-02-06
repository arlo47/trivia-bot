class User {
  constructor(fireStoreId, name, score) {
    this.fireStoreId = fireStoreId;
    this.name = name;
    this.score = score;
  }

  addScore(value) {
    this.score += value;
  }
}

module.exports = User;
