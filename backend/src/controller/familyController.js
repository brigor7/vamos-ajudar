const api = require('../database/connection');

module.exports = {
  async create(request, response) {
    const {
      responsavel,
      endereco,
      bairro,
      cidade,
      uf,
      whatsapp,
    } = request.body;
    try {
      const family_id = await api('families').insert({
        responsavel,
        endereco,
        bairro,
        cidade,
        uf,
        whatsapp,
      });
      return response.status(201).json({ family_id });
    } catch (error) {
      console.log('#Erro ao inserir family: ' + error);
    }
  },

  async delete(request, response) {
    const family_id = request.headers.family_id;
    try {
      await api('families').where({ family_id }).del();
      response.send().status(204);
    } catch (error) {
      console.log('#Erro ao excluir family: ' + error);
    }
  },

  async get(request, response) {
    const family_id = request.params.id;
    const family = await api('families').where({ family_id }).select('*');
    response.send(family);
  },

  async list(request, response) {
    const family = await api('families').select('*');
    response.send(family);
  },
};
