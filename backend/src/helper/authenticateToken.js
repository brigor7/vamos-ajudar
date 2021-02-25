const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const { SECRET } = dotenv.parsed;

module.exports = {
  generateToken(userId) {
    const token = jwt.sign({ userId: userId }, SECRET, {
      expiresIn: '6h',
    });
    return token;
  },
  verifyToken(token) {
    try {
      var decoded = jwt.verify(token, SECRET);
      return decoded;
    } catch (err) {
      console.log('### Erro na verificação do token: ' + err);
    }
  },
};
