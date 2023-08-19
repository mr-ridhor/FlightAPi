const axios = require('axios');
const apiUtils = require('../Utils/apiUtils');
require('dotenv').config();

const FLIGHT_API_KEY = process.env.FLIGHT_API_KEY;

const getFlightFare = async (req, res) => {
  const { from, to, date, adult } = req.query;

  if (!from || !to || !date || !adult) {
    return apiUtils.sendError(res, 400, 'Missing required parameters');
  }

  const options = {
    method: 'GET',
    url: 'https://flight-fare-search.p.rapidapi.com/v2/flights/',
    params: {
      from,
      to,
      date,
      adult,
    },
    headers: {
      'X-RapidAPI-Key': FLIGHT_API_KEY ,
      'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    apiUtils.sendSuccess(res, response.data);
  } catch (error) {
    apiUtils.sendError(res, 500, 'An error occurred');
    console.log(error)
  }
};

module.exports = {
  getFlightFare,
};
