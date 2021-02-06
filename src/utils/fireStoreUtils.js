const { getFireStoreRef } = require('../database/firestore');
const User = require('../classes/User');

const getAllUsers = () => new Promise((resolve, reject) => {
  const userColRef = getFireStoreRef().collection('users');
  userColRef.get()
    .then((docs) => {
      const users = [];
      docs.forEach((doc) => {
        const user = new User(
          doc.data().userId,
          doc.data().userName,
          doc.data().score,
        );
        users.push(user);
      });
      resolve(users);
    })
    .catch((error) => {
      reject(error);
    });
});

const upsertUserScore = (user) => new Promise((resolve, reject) => {
  const userColRef = getFireStoreRef().collection('users');

  userColRef.doc(user.fireStoreId).get()
    .then((doc) => {
      const docData = doc.data() ? doc.data() : user;
      if (doc.exists) {
        docData.score = user.score;
      }
      return userColRef.doc(docData.userId).set(docData);
    })
    .then((result) => {
      resolve('successfully updated user score');
    })
    .catch((error) => {
      reject(error);
    });
});

module.exports = { getAllUsers, upsertUserScore };
