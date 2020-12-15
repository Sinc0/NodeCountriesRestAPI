const express = require('express');

const countriesController = require('../controllers/countries');
const authController = require('../controllers/auth');

const router = express.Router();

//routes
router.post('/token', authController.createToken);

router.post('/post', countriesController.createPost);

module.exports = router;