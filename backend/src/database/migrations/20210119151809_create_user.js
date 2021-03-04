exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('user_id').notNullable();
    table.string('nome').notNullable();
    table.string('apelido').nullable();
    table.string('email').notNullable();
    table.string('nascimento').nullable();
    table.string('sexo').nullable();
    table.string('whatsapp').nullable();
    table.string('password').notNullable();
    table.string('isAdmin').nullable();
    table.string('thumbnail').nullable();
    table.string('cidade').nullable();
    table.string('uf').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
