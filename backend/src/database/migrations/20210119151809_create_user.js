exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('user_id');
    table.string('nome').notNullable();
    table.string('apelido').notNullable();
    table.string('nascimento').notNullable();
    table.string('sexo').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
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
