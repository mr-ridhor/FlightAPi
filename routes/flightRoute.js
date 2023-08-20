const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

router.post('/search', flightController.fetchFlightData);

module.exports = router;
