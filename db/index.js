const knex = require('knex')
const config = require('./knexfile').development
const database = knex(config)

module.exports = {
    // close,
    getAllLocations,
    getEventsByDay,
    getLocationById,
    updateLocation,
    addNewEvent
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

function updateLocation(updatedLocation, db = database) {
    return db('locations')
        .where({ id: updatedLocation.id })
        .update({ name: updatedLocation.name, description: updatedLocation.description })
}

function addNewEvent(newEvent, db = database) {
    return db('events')
        //const newEvent = { name: req.body.name, description: req.body.description, time: req.body.time, locationId: req.body.locationId, day: day }
        .insert({ id: newEvent.id, location_id: newEvent.locationId, day: newEvent.day, time: newEvent.time, name: newEvent.name, description: newEvent.description })
}


// function close(db = database) {
//     db.destroy()
// }