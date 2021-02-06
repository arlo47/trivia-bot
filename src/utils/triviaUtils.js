const axios = require('axios');

const getQuestion = () => new Promise((resolve, reject) => {
  axios.get(process.env.J_SERVICE_URL)
    .then((res) => {
      const data = res.data[0];
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
});

module.exports = { getQuestion };
