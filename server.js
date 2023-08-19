
const express = require('express');
const flightRoutes = require('./router/flightRoutes');
// require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/', flightRoutes);

app.listen(PORT, () => {
  console.log(`Server connected to port ${PORT}`);
});

