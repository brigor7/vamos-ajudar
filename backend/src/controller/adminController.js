const api = require('../database/connection');

module.exports = {
  async add(request, response) {
    const { email, password, credencial } = request.body;
    try {
      /**Verificando se credencial esta correta */
      const user_id = await api
        .select('user_id')
        .from('users')
        .where({ email, password })
        .first();

      if (!user_id || credencial !== 'souadmin') {
        return response.status(400).json({ error: 'Credenciais incorretas.' });
      }
      /**Atualizando o status de admin para true */
      const user = await api('users').where({ user_id }).update({
        isAdmin: 'true',
      });

      response.json({ user, status: 'atualizado como administrador' });
    } catch (error) {
      console.info('#Erro listar user' + error);
    }
  },
};
