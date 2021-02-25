const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const SECRET = 'vamosajudar';

module.exports = {
  generateToken(userId) {
    const token = jwt.sign({ userId: userId }, SECRET, {
      expiresIn: '6h',
    });
    return token;
  },
};
