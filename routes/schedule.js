const express = require('express')
const db = require('../db/index')

const { validateDay, getEventIconPath } = require('../helpers')

const router = express.Router()
module.exports = router

// GET /schedule/friday
router.get('/:day', (req, res) => {
    const day = validateDay(req.params.day)

    db.getEventsByDay(day)
        .then((events) => {
            res.render('showDay', { day: day, events: events })
            return null
        })
        .catch(err => {
            res.render('error', { message: err.message })
            return null
        })
})