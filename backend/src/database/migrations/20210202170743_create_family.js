exports.up = function (knex) {
  return knex.schema.createTable('families', function (table) {
    table.increments('family_id').notNullable();
    table.string('responsavel').notNullable();
    table.string('endereco').nullable();
    table.string('bairro').nullable();
    table.string('cidade').nullable();
    table.string('uf').nullable();
    table.string('whatsapp').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('families');
};
