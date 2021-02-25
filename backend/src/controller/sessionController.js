const api = require('../database/connection');
const authToken = require('../helper/authenticateToken');
const encrypt = require('../helper/encrypt');

module.exports = {
  async session(request, response) {
    const { email, password } = request.body;
    const hashPassword = await encrypt.hash(password);
    try {
      const user_id = await api
        .select('user_id', 'nome', 'email', 'password', 'thumbnail')
        .from('users')
        .where({ email, password: hashPassword })
        .first();
      if (!user_id) {
        return response
          .status(400)
          .json({ error: 'Usuário ou senha incorreto.' });
      }
      const token = authToken.generateToken(user_id);
      response.send({ token });
    } catch (error) {
      console.info('#Erro listar user' + error);
    }
  },

  async verify(request, response) {
    const { authorization } = request.headers;
    try {
      token = authorization.replace('Bearer ', '');
      const decoded = authToken.verifyToken(token);
      response.send({ decoded });
    } catch (error) {
      console.info('#Erro listar user' + error);
    }
  },
};
