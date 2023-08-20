const express = require('express');
const app = express();
const port = 8000; // Choose a suitable port

// Load environment variables from .env file
require('dotenv').config();
app.use(express.json())
// ... Other middleware and configurations ...
app.get('/',(req,res)=>{
    res.send("Hello")
})
// Include your routes
const flightRoutes = require('./routes/flightRoute');
app.use('/api', flightRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
