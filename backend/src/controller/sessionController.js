const api = require('../database/connection');

module.exports = {
  async session(request, response) {
    const { email, password } = request.body;
    try {
      const user_id = await api
        .select('user_id')
        .from('users')
        .where({ email, password })
        .first();
      if (!user_id) {
        return response
          .status(400)
          .json({ error: 'Usuário ou senha incorreto.' });
      }
      response.send(user_id);
    } catch (error) {
      console.info('#Erro listar user' + error);
    }
  },
};
