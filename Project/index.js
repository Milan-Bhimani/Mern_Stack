const express = require('express'); // Import the Express library
const axios = require('axios'); // Import axios to make HTTP requests
require('dotenv').config(); // Load environment variables from .env file

const app = express(); // Create an Express application

const PORT = 3000; // Port for the server to listen on

// Middleware to serve static files from the 'public' folder
app.use(express.static('public'));

// Home route to welcome users
app.get('/', (req, res) => {
    res.send(`
      Welcome to the Weather App!<br>
      My Name is Milan Bhimani!
    `);
  });
  
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


