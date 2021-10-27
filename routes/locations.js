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

router.get('/add', (req, res) => {
    res.render('addLocation')
})

// POST /locations/edit
router.post('/edit', (req, res) => {
    // ASSISTANCE: So you know what's being posted ;)
    // const { id, name, description } = req.body
    const updatedLocation = { id: req.body.id, name: req.body.name, description: req.body.description }

    db.updateLocation(updatedLocation)
        .then((noOfAffectedRows) => {
            console.log(noOfAffectedRows, ' records affected');
            res.redirect('/locations')
            return null
        })
        .catch(err => {
            res.render('error', { message: err.message })
            return null
        })
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