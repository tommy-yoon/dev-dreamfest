const knex = require('knex')
const config = require('./knexfile').development
const database = knex(config)

// showing SQL
database.on('query', console.log)

module.exports = {
    // close,
    getAllLocations,
    getEventsByDay,
    getLocationById,
    updateLocation,
    addNewEvent,
    deleteEvent,
    getEventById,
    updateEvent,
    addNewLocation,
    deleteLocation
}

function getAllLocations(db = database) {
    return db
        .select('id', 'name', 'description')
        .from('locations')
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

function updateLocation(updatedLocation, db = database) {
    return db('locations')
        .where({ "id": updatedLocation.id })
        // .update({ "name": updatedLocation.name, "description": updatedLocation.description })
        .update(updatedLocation)
}

function addNewEvent(newEvent, db = database) {
    return db('events')
        .insert(newEvent)
}

function deleteEvent(id, db = database) {
    return db('events')
        .where({ "id": id })
        .del()
}

function getEventById(id, db = database) {
    return db.where({ "id": id }).first().from('events')
}

function updateEvent(updatedEvent, db = database) {
    return db('events').update(updatedEvent).where('id', updatedEvent.id)
}

function addNewLocation(locationInfo, db = database) {
    return db('locations')
        .insert(locationInfo)
}

function deleteLocation(id, db = database) {
    return db('locations')
        .where({ "id": id })
        .del()
}

// function close(db = database) {
//     db.destroy()
// }