const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 5000;

const API_KEY = '07de5fcaa73be7e367d96ed54981b42a'; // Replace with your OpenWeatherMap API key

app.use(express.json());
app.use(cors()); // Enable CORS for all origins

// Get weather information
app.get('/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).send('City parameter is required');
  }

  try {
    const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric' // or 'imperial' for Fahrenheit
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error details:', error.response ? error.response.data : error.message);
    res.status(500).send('Error fetching weather data');
  }
});

app.listen(port, () => {
  console.log(`Weather API is running on http://localhost:${port}`);
});
