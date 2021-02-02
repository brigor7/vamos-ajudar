const api = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { filename } = request.file;
    const {
      nome,
      sexo,
      datanascimento,
      telefone,
      avatar,
      family_id,
    } = request.body;

    try {
      const integrant_id = await api('integrants').insert({
        nome,
        sexo,
        datanascimento,
        telefone,
        avatar: filename,
        family_id,
      });
      response.send(integrant_id);
    } catch (error) {
      console.log('#erro ao incluir integrante' + error);
    }
    response.send(integrant_id);
  },

  async list(request, response) {
    try {
      const integrants = await api('integrants').select('*');
      response.send(integrants);
    } catch (error) {
      console.log('#erro ao listar integrants: ' + error);
    }
  },

  async get(request, response) {
    const integrant_id = request.params.id;
    try {
      const integrant = await api('integrants')
        .where({ integrant_id })
        .select('*');
      response.send(integrant);
    } catch (error) {}
  },

  async delete(request, response) {
    const integrant_id = request.headers.integrant_id;
    try {
      await api('integrants').where({ integrant_id }).del();
      response.status(204).send();
    } catch (error) {
      console.log('#Erro ao excluir integrante' + error);
    }
  },
};
