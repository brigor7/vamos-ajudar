const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const { SECRET } = dotenv.parsed;

module.exports = {
  generateToken(user) {
    const token = jwt.sign({ user: user }, SECRET, {
      expiresIn: '6h',
    });
    return token;
  },
  verifyToken(token) {
    try {
      var decoded = jwt.verify(token, SECRET);
      return decoded;
    } catch (err) {
      throw new Error({ error: 'Token com assinatura inválida' + err });
      console.log('Token com assinatura invalida' + err);
    }
  },
};
