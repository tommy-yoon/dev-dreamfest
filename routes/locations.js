const express = require('express')
const db = require('../db/index')

const router = express.Router()
module.exports = router

// GET /locations
router.get('/', (req, res) => {
    db.getAllLocations()
        .then((locations) => {
            res.render('showLocations', { locations })
            return null
        })
        .catch(err => {
            res.render('error', { message: err.message })
            return null
        })
})

// POST /locations/edit
router.post('/edit', (req, res) => {
    // ASSISTANCE: So you know what's being posted ;)
    const { id, name, description } = req.body

    db.updateLocation(updatedLocation)

    res.redirect('/locations')
})

// GET /locations/4/edit
router.get('/:id/edit', (req, res) => {
    const id = Number(req.params.id)

    db.getLocationById(id)
        .then((location) => {
            // res.render('showLocations', { locations })
            res.render('editLocation', location)
            return null
        })
        .catch(err => {
            res.render('error', { message: err.message })
            return null
        })
})