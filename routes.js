//imports
const express = require('express')
const validate = require('./validation')
const country = require('./models/country')
const countriesController = require('./controllers/countries')
const authController = require('./controllers/auth')
const router = express.Router()

//routes
router.use('/countries', validate, countriesController.getAll)
router.use('/country', validate, countriesController.getSpecific)
router.post('/token', authController.createToken)
router.post('/post', countriesController.createPost)
router.use('/help', (req, res, next) => { res.render('index') })
router.get('/index', (req, res, next) => { res.render('index', {token: null}) })
router.get('/', (req, res, next) => { res.render('index', {token: null}) })
router.use((req, res, next) => { res.status(404).json({ error: 'page or endpoint does not exist' }) })

//export
module.exports = router