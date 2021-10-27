exports.up = function(knex) {
    return knex.schema.createTable('events', (t) => {
        t.increments('id').primary()
        t.integer('location_id').references('locations.id')
        t.string('day')
        t.string('time')
        t.string('name')
        t.string('description')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('events')
};