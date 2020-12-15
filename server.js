const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const countryGETS = require('./routes/countryGETS');
const countryPOSTS = require('./routes/countryPOSTS');
const country = require('./country');
const token = require('./token');

//express
const server = express();
server.set('view engine', 'ejs');
server.set('views', 'views');
server.use(express.static(path.join(__dirname, 'public')));

//parsers
server.use(bodyParser.json());
server.use(bodyParser.raw());
server.use(bodyParser.text());
server.use(bodyParser.urlencoded({ extended: true }));

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Acess-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

server.use('/help', (req, res, next) => {
    res.render('index');
});

server.get('/index', (req, res, next) => {
    res.render('index');
});

server.get('/', (req, res, next) => {
    res.render('index');
});

//routes
server.use(countryGETS);
server.use(countryPOSTS);

server.use((req, res, next) => {
    res.status(404).json({
        error: 'page or endpoint does not exist'
    });
});

//deploy
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@programmingprojects.cpk0g.mongodb.net/${process.env.MONGO_DEFAULT_DB}`, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('we are connected!');
  server.listen(process.env.PORT || 8080);
});

//testing area

//mongoose.connection.collection('tokens').updateOne({id: "x"}, {$set: {count: 3}});

/*
const t = new token({ 
    id: "123xdas213131",
    createdAt: new Date()
});

//t.save()
*/

//let d = mongoose.connection.collection("tokens")
//d.createIndex({ "createdAt": 1 }, { expireAfterSeconds: 3600 });

/*
country.find().then(countries => {
    let totalCountries = countries.length + 1;

    const Country = new country({
        id: totalCountries++, 
        name: 'Test',
        population: 'Test',
        capital: 'Test',
        area: 'Test',
        currency: 'Test' 
    });
    
    Country
    .save()
    .then(() => console.log('country added to db'));
})
*/

/*
const Country = new country({ 
    name: 'Test',
    population: 'Test',
    capital: 'Test',
    area: 'Test',
    currency: 'Test' 
});

Country
.save()
.then(() => console.log('country added to db'));

country.find().then(countries => console.log(countries));
*/