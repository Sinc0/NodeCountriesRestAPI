//imports
const express = require('express')
const validate = require('./validation')
const countries = require('./controllers/countries')
const tokens = require('./controllers/tokens')

//variables
const router = express.Router()

//gets
router.get('/', (req, res, next) => { res.render('index', {token: null}) })
router.get('/index', (req, res, next) => { res.render('index', {token: null}) })
router.get('/help', (req, res, next) => { res.render('index') })
router.get('/about', (req, res, next) => { res.render('about') })
router.get('/privacy', (req, res, next) => { res.render('about') })
router.get('/help', (req, res, next) => { res.render('about') })
router.get('/all', validate, countries.all)
router.get('/specific', validate, countries.specific)
router.get('/multiple', validate, countries.multiple)

//posts
router.post('/token', tokens.create)

//exports
module.exports = router