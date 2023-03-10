//imports
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const db = require('mongoose')
const routes = require('./routes')

//variables
const server = express()

//settings
server.set('view engine', 'ejs') //set view engine
server.set('views', 'views') //set views folder
server.use(express.static(path.join(__dirname, 'public'))) //set public folder
server.use(bodyParser.json()) //set parser
server.use(bodyParser.raw()) //set parser
server.use(bodyParser.text()) //set parser
server.use(bodyParser.urlencoded({ extended: true })) //set parser
server.use((req, res, next) => { //set cors handling
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})
server.use(routes) //set routes
server.use((req, res, next) => { res.status(404).json({ error: 'endpoint does not exist' }) }) //set route does not exists handling

//connect to db
db.connect(`mongodb+srv://:@programmingprojects.cpk0g.mongodb.net/`, { useNewUrlParser: true, useUnifiedTopology: true })
db.connection.on('error', console.error.bind(console, 'connection error:'))
db.connection.once('open', function() { console.log('db connected!') })

//start server
server.listen(process.env.PORT || 8080)