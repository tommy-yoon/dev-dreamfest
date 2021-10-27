const knex = require('knex')
const config = require('./knexfile').development
const database = knex(config)

module.exports = {
    // close,
    getAllLocations,
    getEventsByDay,
    getLocationById
}

function getAllLocations(db = database) {
    return db('locations')
        .select('id', 'name', 'description')
}

function getEventsByDay(day, db = database) {
    return db('events')
        .join('locations', 'events.location_id', 'locations.id')
        .select('events.id as id', 'events.name as name', 'events.description as description', 'events.time as time', 'locations.name as locationName')
        .where('events.day', day)
}

function getLocationById(id, db = database) {
    return db('locations')
        .where('id', id)
        .select('id', 'name', 'description')
        .first()
}

// function close(db = database) {
//     db.destroy()
// }