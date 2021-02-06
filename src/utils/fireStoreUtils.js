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

module.exports = { getAllUsers };
