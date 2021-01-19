const api = require('../database/connection');

module.exports = {
  get(_, res) {
    res.send('user get acessado');
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
