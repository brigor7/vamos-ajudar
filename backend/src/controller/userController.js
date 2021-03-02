const api = require('../database/connection');
const encrypt = require('../helper/encrypt');

module.exports = {
  async list(request, response) {
    try {
      const list = await api.select('*').from('users');
      response.json(list);
    } catch (error) {
      console.info('#Erro listar user' + error);
    }
  },

  async remove(request, response) {
    const user_id = request.headers.user_id;
    try {
      const id = await api
        .select('user_id')
        .from('users')
        .where({ user_id })
        .first();
      if (!id) {
        return response
          .status(400)
          .json({ error: 'ID incorreto. Não foi possivel remover usuário' });
      }

      await api('users').where({ user_id }).del();
      response.send().status(204);
    } catch (error) {
      console.info('#Erro deletar user' + error);
    }
  },

  async create(request, response) {
    const { filename } = request.file;
    const {
      nome,
      apelido,
      nascimento,
      sexo,
      email,
      whatsapp,
      password,
      isAdmin,
      cidade,
      uf,
    } = request.body;
    try {
      const hashPassword = await encrypt.hash(password);
      const user = await api('users').insert({
        nome,
        apelido,
        nascimento,
        sexo,
        email,
        whatsapp,
        password: hashPassword,
        thumbnail: filename,
        isAdmin,
        cidade,
        uf,
      });
      return response.status(201).json({ user });
    } catch (error) {
      console.info('#Erro inserir user' + error);
    }
  },

  async update(request, response) {
    const user_id = request.headers.user_id;
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
      const user = await api('users')
        .update({
          nome,
          apelido,
          nascimento,
          sexo,
          email,
          whatsapp,
          thumbnail,
          cidade,
          uf,
        })
        .where({ user_id });
      return response.status(201).json({ user_id });
    } catch (error) {
      console.info('#Erro inserir user' + error);
    }
  },
};
