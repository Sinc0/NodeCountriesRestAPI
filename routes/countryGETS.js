const express = require('express');

const countriesController = require('../controllers/countries');
const country = require('../country');
const validate = require('../validation');

const router = express.Router();

//routes
router.use('/countries', validate, countriesController.getAll);

router.use('/country', validate, countriesController.getSpecific);

module.exports = router;