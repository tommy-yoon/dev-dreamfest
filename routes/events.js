const express = require('express')
const db = require('../db/index')
const { eventDays, capitalise, validateDay } = require('../helpers')

const router = express.Router()
module.exports = router

// GET /events/add/friday
router.get('/add/:day', (req, res) => {
    const day = validateDay(req.params.day)
    const days = eventDays.map(eventDay => ({
        value: eventDay,
        name: capitalise(eventDay),
        selected: eventDay === day ? 'selected' : ''
    }))

    db.getAllLocations()
        .then((locations) => {
            const viewData = { locations, days, day }
            res.render('addEvent', viewData)
            return null
        })
        .catch(err => {
            res.render('error', { message: err.message })
            return null
        })

})

// POST /events/add
router.post('/add', (req, res) => {
    // ASSISTANCE: So you know what's being posted ;)
    // const { name, description, time, locationId } = req.body
    const day = validateDay(req.body.day)
    const newEvent = {
        "name": req.body.name,
        "description": req.body.description,
        "time": req.body.time,
        "location_Id": req.body.locationId,
        "day": day
    }

    db.addNewEvent(newEvent)
        .then((noOfAffectedRows) => {
            console.log(noOfAffectedRows, ' records affected');
            res.redirect(`/schedule/${day}`)
            return null
        })
        .catch(err => {
            res.render('error', { message: err.message })
            return null
        })

})

// GET /events/3/edit
router.get('/:id/edit', async(req, res) => {
    try {
        const id = Number(req.params.id)

        const event = await db.getEventById(id)
        const locations = await db.getAllLocations()
        const days = eventDays.map(eventDay => ({
            value: eventDay,
            name: capitalise(eventDay),
            selected: eventDay === event.day ? 'selected' : ''
        }))
        const viewData = { event, locations, days }
        res.render('editEvent', viewData)
    } catch (error) {

        res.render('error', { message: error.message })
        return null
    }
})

// POST /events/edit
router.post('/edit', (req, res) => {
    // ASSISTANCE: So you know what's being posted ;)
    const { name, description, time } = req.body
    const id = Number(req.body.id)
    const day = validateDay(req.body.day)
    const locationId = Number(req.body.locationId)

    const updatedEvent = {
        "id": id,
        "day": day,
        "location_id": locationId,
        "name": req.body.name,
        "description": req.body.description,
        "time": req.body.time
    }

    db.updateEvent(updatedEvent)
        .then((noOfAffectedRows) => {
            console.log(noOfAffectedRows, ' records affected');
            res.redirect(`/schedule/${day}`)
            return null
        })
        .catch(err => {
            res.render('error', { message: err.message })
            return null
        })

})

// POST /events/delete
router.post('/delete', (req, res) => {
    const id = Number(req.body.id)
    const day = validateDay(req.body.day)

    db.deleteEvent(id)
        .then((noOfAffectedRows) => {
            console.log(noOfAffectedRows, ' records affected');
            res.redirect(`/schedule/${day}`)
            return null
        })
        .catch(err => {
            res.render('error', { message: err.message })
            return null
        })

})