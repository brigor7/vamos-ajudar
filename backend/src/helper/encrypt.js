const crypto = require('crypto');
const dotenv = require('dotenv').config();

const { SECRET } = dotenv;

module.exports = {
  async hash(password) {
    return new Promise((resolve, reject) => {
      crypto.scrypt(password, SECRET, 64, (err, derivedKey) => {
        if (err) reject(err);
        resolve(SECRET + ':' + derivedKey.toString('hex'));
      });
    });
  },

  async verify(password, key) {
    return new Promise((resolve, reject) => {
      crypto.scrypt(password, SECRET, 64, (err, derivedKey) => {
        if (err) reject(err);
        resolve(key == derivedKey.toString('hex'));
      });
    });
  },
};
