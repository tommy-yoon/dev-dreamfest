exports.up = function(knex) {
    return knex.schema.createTable('locations', (t) => {
        t.increments('id').primary()
        t.string('name')
        t.string('description')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('locations')
};