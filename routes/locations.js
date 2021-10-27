const express = require('express')
const db = require('../db/index')

const router = express.Router()
module.exports = router

// GET /locations
router.get('/', async(req, res) => {
    try {
        const locations = await db.getAllLocations()
        res.render('showLocations', { locations })
    } catch (error) {
        res.render('error', { message: error.message })
    }

    // .then((locations) => {
    //     res.render('showLocations', { locations })
    //     return null
    // })
    // .catch(err => {
    //     res.render('error', { message: err.message })
    //     return null
    // })
})

router.get('/add', (req, res) => {
    res.render('addLocation')
})

// POST /locations/edit
router.post('/edit', async(req, res) => {
    try {
        const updatedLocation = {
            "id": req.body.id,
            "name": req.body.name,
            "description": req.body.description
        }

        const noOfAffectedRows = await db.updateLocation(updatedLocation)
        console.log(noOfAffectedRows, ' records affected');
        res.redirect('/locations')

    } catch (error) {
        res.render('error', { message: err.message })
    }

    // .then((noOfAffectedRows) => {
    //     console.log(noOfAffectedRows, ' records affected');
    //     res.redirect('/locations')
    //     return null
    // })
    // .catch(err => {
    // res.render('error', { message: err.message })
    //     return null
    // })
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