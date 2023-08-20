const axios = require('axios');

const fetchFlightData = async (req, res) => {
  const { from, to, date, adult} = req.body;

  if (!from || !to || !date || !adult ) {
    return res.status(400).json({ error: 'Please provide valid search parameters.' });
  }

  const options = {
    method: 'GET',
    url: 'https://flight-fare-search.p.rapidapi.com/v2/flights/',
    params: {
      from,
      to,
      date,
      adult
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching flight data.' });
  }
};

module.exports = {
  fetchFlightData
};
