const api = require('../database/connection')

module.exports = {
  async create(request, response) {
    const { responsavel, endereco, bairro, cidade, uf, whatsapp } = request.body
    try {
      const family_id = await api('families').insert({
        responsavel,
        endereco,
        bairro,
        cidade,
        uf,
        whatsapp,
      })
      return response.status(201).json({ family_id })
    } catch (error) {
      console.log('#Backend: Erro ao inserir family: ' + error)
    }
  },

  async update(request, response) {
    try {
      const {
        responsavel,
        endereco,
        bairro,
        cidade,
        uf,
        whatsapp,
      } = request.body
      const family_id = request.headers.family_id
      console.log(
        'backend update family:',
        responsavel,
        endereco,
        bairro,
        cidade,
        uf,
        whatsapp,
      )
      await api('families')
        .update({
          responsavel,
          endereco,
          bairro,
          cidade,
          uf,
          whatsapp,
        })
        .where({ family_id })
      return response.status(202).send()
    } catch (error) {
      console.log('#Backend: Erro ao atualizar family: ' + error)
    }
  },

  async delete(request, response) {
    const family_id = request.headers.family_id
    try {
      await api('families').where({ family_id }).del()
      response.send().status(204)
    } catch (error) {
      console.log('#Backend: Erro ao excluir family: ' + error)
    }
  },

  async get(request, response) {
    const family_id = request.params.id
    const family = await api('families').where({ family_id }).select('*')
    response.send(family)
  },

  async list(request, response) {
    const family = await api('families').select('*')
    response.send(family)
  },
}
