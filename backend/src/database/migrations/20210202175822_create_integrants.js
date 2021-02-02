exports.up = function (knex) {
  return knex.schema.createTable('integrants', function (table) {
    table.increments('integrant_id').notNullable();
    table.string('nome').notNullable();
    table.string('sexo').notNullable();
    table.string('datanascimento').notNullable();
    table.string('telefone').nullable();
    table.string('avatar').nullable();

    table.string('family_id').notNullable();
    table.foreign('family_id').references('family_id').inTable('families');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('integrants');
};
