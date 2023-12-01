exports.up = function (knex) {
  return knex.schema.table('vendedores', function (table) {
    table.string('cpf', 11).unique().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.table('vendedores', function (table) {
    table.dropColumn('cpf');
  });
};
