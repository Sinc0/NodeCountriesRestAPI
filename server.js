//imports
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')

//server
const server = express()

//set
server.set('view engine', 'ejs')
server.set('views', 'views')

//use
server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.json())
server.use(bodyParser.raw())
server.use(bodyParser.text())
server.use(bodyParser.urlencoded({ extended: true }))
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Acess-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

//routes
server.use(routes)

//connect to db
mongoose.connect(`mongodb+srv://:@programmingprojects.cpk0g.mongodb.net/`,  {
    useNewUrlParser: true, useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('db connected!')

  //start
  server.listen(process.env.PORT || 8080)
})