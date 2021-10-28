const clear = require('clear')
const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')

const locationRoutes = require('./routes/locations.js')
const scheduleRoutes = require('./routes/schedule.js')
const eventRoutes = require('./routes/events.js')

/*
 * create the server
 *************************/

const server = express()
module.exports = server

/*
 * configure the server
 *************************/

const publicFolder = path.join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

/*
 * define the routes
 *************************/

server.use((req, res, next) => {
    // clear()
    console.log('URL', req.url);
    console.log('Parameters', req.params);
    console.log('Body', req.body);
    next();
});

server.get('/', (req, res) => {
    res.redirect('/schedule/friday')
})

server.use('/locations', locationRoutes)
server.use('/schedule', scheduleRoutes)
server.use('/events', eventRoutes)