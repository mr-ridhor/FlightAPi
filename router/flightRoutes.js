const express = require('express');
const flightController = require('../controllers/flightController');

const router = express.Router();

router.get('/search', flightController.getFlightFare);

module.exports = router;
