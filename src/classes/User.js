class User {
  constructor(fireStoreId, name, score) {
    this.fireStoreId = fireStoreId;
    this.name = name;
    this.score = score;
  }
}

module.exports = User;
