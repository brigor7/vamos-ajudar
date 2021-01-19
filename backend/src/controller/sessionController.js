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

  async remove(request, response) {
    const user_id = request.headers.user_id;
    try {
      const user_id = await api
        .select('user_id')
        .from('users')
        .where({ user_id });
      console.log(user_id);
      if (user_id !== []) {
        await api.delete('users').where({ user_id });
        response.send().status(204);
      }
    } catch (error) {
      console.info('#Erro deletar user' + error);
    }
  },

  async create(request, response) {
    const {
      nome,
      apelido,
      nascimento,
      sexo,
      email,
      whatsapp,
      password,
      thumbnail,
      isAdmin,
      cidade,
      uf,
    } = request.body;
    try {
      const user_id = await api('users').insert({
        nome,
        apelido,
        nascimento,
        sexo,
        email,
        whatsapp,
        password,
        thumbnail,
        isAdmin,
        cidade,
        uf,
      });
      return response.status(201).json({ user_id });
    } catch (error) {
      console.info('#Erro inserir user' + error);
    }
  },
};